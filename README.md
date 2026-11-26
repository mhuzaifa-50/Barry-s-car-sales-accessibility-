# Barry's Car Sales: accessibility and usability fixes

This is my reworked version of the Barry's Car Sales starter site for the 5WCM2000/5WCM2001 accessibility and usability assignment. I evaluated the original site with WAVE, Lighthouse, keyboard only testing and a manual review, then fixed the problems one at a time. Each commit covers one fix or a small group of related fixes.


## What changed

Major issues (WCAG Level A and AA failures):
- Alt text added to images and the page language declared
- "Ask about this car" changed from a clickable div to a real link
- Every form field labelled, and the contact method radios grouped with a fieldset and legend
- Required fields marked with an asterisk and text instead of colour alone
- Form validation with clear error messages and a confirmation message
- Same navigation order and labels on every page
- Layout now works on phones (viewport tag and fluid widths)

Normal issues:
- Skipped heading levels fixed on Home and About
- Team table given proper headers and a caption
- Clear link text, and each car link pre selects that car on the form
- Email and phone fields use the correct input types and autocomplete
- Message box no longer pre filled
- Checkbox and radio buttons sit next to their labels
- Visible focus outline, a skip link, and the current page shown in the nav
- Privacy notice added to the form
- Watermarked photos replaced with free licensed photos from Pexels, and the Audi listing now shows an Audi

Minor issues:
- Lists used for features and opening times
- Clickable phone numbers, clearer page titles and button text
- Larger footer text and click targets, font fallbacks, car photos shown at the same size

## Testing

The original WAVE results are in docs/wave-before. Screenshots of the fixes and the final WAVE and Lighthouse results are in docs/wave-after.

## Photo credits

All photos are from Pexels and are free to use under the Pexels licence.
- hatchback.jpg: https://www.pexels.com/photo/vauxhall-corsa-with-open-doors-17078811/
- suv.jpg: https://www.pexels.com/photo/photo-of-a-car-standing-on-the-street-12498406/
- saloon.jpg: https://www.pexels.com/photo/luxurious-white-car-on-road-in-forest-13513993/
- electric.jpg: https://www.pexels.com/photo/the-left-front-side-view-of-the-genesis-gv60-with-a-mountain-under-a-clear-sky-26182777/

