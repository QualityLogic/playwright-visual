# playwright-visual
Exploring visual comparisons https://playwright.dev/docs/test-snapshots

## How to write a visual regression test
It works exactly as the documentation describes and is easy to implement.

## Considerations
Visual regression testing is an effective way to expose unintended changes in the UI and fixing those errors early can lead to an improved user experience. But there are issues that need to be considered before deciding to implement it.

1. Limited coverage: Since visual regression testing only compares screenshots, visual changes to the UI is what it is useful for. It does not test functionality or detect any errors an app produces (such as server / javascript errors). Hence, visual regression testing should not be relied on as the primary mode of test automation, but could be used as an addition to an already robust end to end test suite.

2. High maintenance: Any updates to the UI will cause tests to fail. Every update to the UI will require updating the referenced screenshots. All new screenshots will need to be verified to be an accurate representation of the intended changes. This is a relatively high maintenance process that would require thought and planning to integrate into an organizations SDLC and could potentially slow developer velocity.

## Opinion
Visual regression testing can help detect UI inconsistencies early and lead to improved user experience. Playwright makes it easy to create and reference screenshots. However given the considerations above, visual regression testing should be used sparingly to supplement existing automated tests and would be best applied to pages that are updated infrequently. Visual regression testing could work well for a stable, mature product. For a product in active development with high velocity the time it takes to maintain visual regression tests would potentially be more costly than it's worth.
