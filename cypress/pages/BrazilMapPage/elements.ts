export const elements = {
    brazilMap: '[data-test="brazil-map"]',
    zoomableGroup: '[data-test="zoomable-group"]',
    brazilStates: '[data-test="brazil-states"]',
    brazilState: (stateAcronym: string) => `[data-test="brazil-state-${stateAcronym}"]`,
};