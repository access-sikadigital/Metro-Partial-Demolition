# Metro — tracking setup (GTM, GA4, Google Ads, Search Console, Bing, Clarity)

The site is already wired for all of this. The accounts have to be created by
someone logged in to Sika Digital's Google and Microsoft accounts. Work top to
bottom. Total time is about 60–90 minutes.

**Already done on the site (no action needed):**

- GTM loads from the Vercel variable `NEXT_PUBLIC_GTM_ID`. Nothing loads until that's set.
- Every enquiry pushes this to the dataLayer on its thank-you page:
  `generate_lead` with `form_location`, `lead_id`, `service` and `user_data.sha256_email_address` / `user_data.sha256_phone_number` (hashed in the browser, ready for enhanced conversions).
  It fires **once per enquiry**. A refresh or direct visit to the thank-you page fires nothing.
- Every tap on a phone number pushes `phone_click`.
- The same `lead_id` goes to GoHighLevel, so Ads conversions and GHL leads can be matched later.
- `gclid`, `gbraid`, `wbraid`, `fbclid` and the UTMs go to GHL with every lead.
- `sitemap.xml` and `robots.txt` are live; thank-you pages are blocked from search.

**Use IDs you create for Metro. Never reuse Demo Bros' GTM, GA4 or Ads IDs.**

---

## 1. Google Analytics 4 (10 min)

1. Go to analytics.google.com, then Admin → **Create → Property**.
   - Name: `Metro Partial Demolition`
   - Time zone: Australia/Melbourne
   - Currency: AUD
   - Industry: Home & Garden. Objective: Generate leads.
2. **Web stream**: URL `https://metropartialdemolition.com.au`, name `Metro website`. Leave Enhanced measurement ON.
3. Copy the **Measurement ID** (`G-XXXXXXXXXX`).
4. Admin → Data collection and modification → **Data retention**: set to **14 months**.
5. Admin → Events → after the first test lead: mark **generate_lead** as a **Key event**. Leave `phone_click` as a normal event.
6. Admin → Data streams → web stream → Configure tag settings → **List unwanted referrals**: add `metropartialdemolition.com.au`.

## 2. Google Ads account and conversion actions (20 min)

> **Status today:** Metro doesn't have a Google Ads account yet. Nothing has been built in Ads.

1. In the **Sika Digital MCC**, go to Accounts → **+ Create new account**.
   - Name: `MET-01 - Metro Partial Demolition` (to match `DEM-01 - Demo Bros`)
   - Currency: **AUD**. Time zone: **(GMT+10:00) Melbourne**. Neither can be changed later.
2. Billing: add Metro's card. The client pays ad spend directly.
3. Admin → Account settings → **Auto-tagging: ON**.
4. Goals → Conversions → Summary → **+ New conversion action → Website**, enter the domain, then **Add a conversion action manually**:

   | Name | Category | Value | Count | Click window | Primary? |
   |---|---|---|---|---|---|
   | `Submit lead form (Website)` | Submit lead form | Don't use a value | **One** | 30 days | **Primary** |
   | `Phone click (Website)` | Phone call lead | Don't use a value | One | 30 days | **Secondary** |

   For each one: **Tag setup → Use Google Tag Manager**, then copy the **Conversion ID** (`AW-XXXXXXXXXX`) and the **Conversion label**.
5. Goals → Conversions → Settings → **Enhanced conversions for leads: ON**, method **Google Tag Manager**. Accept the customer data terms.
6. **Calls from ads** conversion: + New conversion action → **Phone calls → Calls from ads using call assets**. Set call length to **60 seconds** and make it Primary. It works once the call asset is added in the campaign build.
7. Tools → Data manager → **Link Google Analytics (GA4)**: link the Metro property and turn on **auto-tagging + import**. **Don't** import GA4 key events as primary conversions, because they'd double-count with the GTM tag.
8. Admin → Linked accounts → **Google Tag Manager** (optional, for convenience).

## 3. Google Tag Manager (15 min)

1. Go to tagmanager.google.com, then **Create account**.
   - Account: `Metro Partial Demolition`, Country: Australia
   - Container: `metropartialdemolition.com.au`, Target: **Web**
2. Copy the container ID (`GTM-XXXXXXX`) and **send it to me**. I'll add it to Vercel and redeploy. You don't need to paste the install code anywhere.
3. Import the prepared container: **Admin → Import container**.
   - File: `docs/google-ads/metro-gtm-container.json`
   - Workspace: Existing (Default)
   - Option: **Merge → Overwrite conflicting**
4. Open **Variables** and fill in the 5 constants:

   | Variable | Value |
   |---|---|
   | `Const - GA4 Measurement ID` | `G-…` from step 1 |
   | `Const - Google Ads Conversion ID` | `AW-…` from step 2 (digits after AW- if GTM asks for the number only) |
   | `Const - Ads Label - Lead Form` | label for "Submit lead form" |
   | `Const - Ads Label - Phone Click` | label for "Phone click" |
   | `Const - Clarity Project ID` | from step 6 |

5. Open the variable **UPD - Enhanced conversions** and confirm it says **Manual configuration**, with Email = `{{DLV - sha256 email}}` and Phone = `{{DLV - sha256 phone}}`. If the fields came through empty, set them by hand.
6. Open the tag **Google Ads - Lead Form Conversion** and check two things:
   - **Include user-provided data** is ticked and uses `UPD - Enhanced conversions`
   - **Transaction ID** is `{{DLV - lead_id}}`
7. **Preview** (Tag Assistant) on `https://metropartialdemolition.com.au/partial-demolition`, then submit a real test enquiry. On the thank-you page these should fire **once**:
   - GA4 Event - generate_lead
   - Google Ads - Lead Form Conversion (showing "user-provided data: detected")

   Refresh the thank-you page: nothing should fire again.
   Tap the phone number: GA4 Event - phone_click and Google Ads - Phone Click should fire.
8. **Submit → Publish**, version name `v1 - GA4, Ads lead + phone, Clarity`.

**What the container holds:**

| Tag | Fires on |
|---|---|
| Google Tag - GA4 | All pages (Initialization) |
| Conversion Linker | All pages (Initialization) |
| GA4 Event - generate_lead | `generate_lead` |
| GA4 Event - phone_click | `phone_click` |
| Google Ads - Lead Form Conversion (+ enhanced conversions, transaction ID) | `generate_lead` |
| Google Ads - Phone Click (secondary) | `phone_click` |
| Microsoft Clarity | All pages |

**If the import fails**, build the same 7 tags by hand from the table above. Use the trigger types Custom Event `generate_lead` and Custom Event `phone_click`, and Data Layer Variables for `form_location`, `lead_id`, `service`, `user_data.sha256_email_address`, `user_data.sha256_phone_number` and `click_location`.

## 4. Google Search Console (10 min)

1. Go to search.google.com/search-console, then **Add property → Domain** and enter `metropartialdemolition.com.au`.
2. Copy the **TXT record** it gives you (`google-site-verification=…`).
3. In GoDaddy, go to DNS → **Add New Record**: Type **TXT**, Name **@**, Value: paste it, TTL 1 hour. **Save**.
   - Add it as a new record. Don't edit the existing `google-site-verification` TXT, which belongs to Google Workspace.
4. Back in Search Console, click **Verify**. If it fails, wait 10 minutes and try again.
5. Sitemaps → submit `https://metropartialdemolition.com.au/sitemap.xml`.
6. URL Inspection → `https://metropartialdemolition.com.au/` → **Request indexing**. Do the same for `/partial-demolition`.
7. Settings → Users → add `access@sikadigital…` as Owner if verifying under another login.
8. In Google Ads: Tools → Data manager → **Search Console** → link it (optional).

## 5. Bing Webmaster Tools (5 min)

1. Go to bing.com/webmasters and sign in with the Sika Microsoft account.
2. Choose **Import from Google Search Console**. This needs step 4 done first. It imports the site, verification and sitemap in one go.
3. Check that the sitemap shows under Sitemaps. If it doesn't, submit `https://metropartialdemolition.com.au/sitemap.xml`.

## 6. Microsoft Clarity (5 min)

1. Go to clarity.microsoft.com, then **+ New project**.
   - Name: `Metro Partial Demolition`
   - URL: `https://metropartialdemolition.com.au`
   - Category: Services
2. Choose **Install manually**, but **don't paste the code**. Just copy the **Project ID** (Settings → Overview, about 10 characters).
3. Put the Project ID in GTM → `Const - Clarity Project ID` (step 3.4), then publish.
4. Clarity → Settings → Setup → **Google Analytics integration**: connect the Metro GA4 property.
5. Settings → **Masking: Strict** (form fields are masked so no personal details are recorded).
6. Recordings appear within about 2 hours of the first visits.

## 7. Final check (send me the results)

- [ ] GTM ID sent to me, set in Vercel, live on the site (view source shows `GTM-…`)
- [ ] Tag Assistant: lead form conversion fires once per enquiry, with user-provided data
- [ ] GA4 Realtime shows `generate_lead` after a test enquiry
- [ ] Google Ads → Conversions shows "Submit lead form (Website)" as **Recording conversions** (allow up to 24h)
- [ ] Enhanced conversions diagnostics: "Recording" (allow 48–72h)
- [ ] Search Console verified, sitemap "Success"
- [ ] Bing imported, sitemap listed
- [ ] Clarity shows recordings
- [ ] Test leads deleted from GHL

## Not included yet (do after launch)

- **Website call tracking with a Google forwarding number** (counts real calls ≥60s from the site, not just taps). This needs Metro's real phone number on the site first. In GTM it's a "Google Ads Calls from Website Conversion" tag with the phone number exactly as displayed.
- **GHL → Google Ads offline conversions** (Quoted / Won) using the `gclid` and `lead_id` already stored in GHL.
- **Consent banner.** Not legally required in Australia for this setup. Add one if Metro wants one.
