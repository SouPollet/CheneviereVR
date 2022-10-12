/*
 * COPYRIGHT (c) 2019 Speedernet <contact@speedernet.fr>
 * ALL RIGHTS RESERVED
 * This file api-wrapper.js is part of SpeedernetSphere project
 * SpeedernetSphere can not be copied and/or distributed without the express permission of Speedernet
 */

/** FRONT API
 * GETTING THE API:

 * traces object is global in the scope. You can also have access to the traces object from window.sphere property
 window.addEventListener('load', function () {
        this.traces = window.sphere || (window.top && window.top.sphere) || {};
     }

 * Definition of conditional data, received in "onRawInteractions" method
 * ImplicationData[]:

 [
     {
         uuid: string (current conditional ID),
         name: string (name of the conditional),
         inputStatement: [ (list of input statement)
             {
                 targetUUID: string (uuid of the target element of this statement),
                 triggerUUID: string | null (uuid of the input aspect or state of the target element, if the statement type is ASPECT OR STATE - see triggerType)
                 triggerType: int | null (defines the type of the trigger.
                                            Possible values:
                                                1 = CLICK,
                                                2 = MEDIA_END,
                                                3 = ASPECT,
                                                4 = STATE,
                                                9 = ANIM,
                                                10 = ANIM_END,
                                                16 = DEVICE_TYPE)
             },
             ...
         ],
         outputStatement: [
             {
                 targetUUID: string (uuid of the target element that needs a change),
                 triggerUUID: string (uuid of the new state or aspect of the target element),
                 triggerType: int | null (the type of trigger - see above.
                                            Possible values:
                                                3 = ASPECT,
                                                4 = STATE,
                                                5 = CHANGE_SCENE,
                                                6 = TIME,
                                                7 = SCORM,
                                                8 = SCORM_END,
                                                9 = ANIM,
                                                11 = URL_TAB,
                                                12 = URL_POPUP,
                                                17 = STORYLINE,
                                                18 = VR_EXIT)
             },
             ...
         ]
     },
     ...
 ]
 */

var traces = window.traces;

/**
 * Sent every time that a collection of conditionals is processed
 * @param {ImplicationData[]} rawData
 */
traces.onRawInteractions = function(rawData) {
    // check if the conditional exists:
    // example ->
    /*
        var hasConditional = function(conditionals, name) {
            return conditionals.find(
                function(element) {
                    return element.name == name;
                }
            )
        };
        if ( hasConditional(rawData, "conditional name") ) {
            // do something
        }
    */
};

/**
 * Happens when a click conditional is triggered
 * @param interactionName - the name of the conditional
 */
traces.onUserInteraction = function( interactionName ) {

};

/**
 * Happens when a media end playback conditional is triggered
 * @param interactionName - the name of the conditional
 */
traces.onMediaEndInteraction = function( interactionName ) {

};

/**
 * Sent when a SCORM trace have been propagated to the LMS
 * @param interactionName
 * @param statement
 */
traces.onTracking = function( interactionName, statement ) {

};

/**
 * Sent after a 'DOMContentLoaded' event, and before SCORM and other API initialization
 */
traces.onLoaded = function() {
    // If you need to catch exit: standard LMS behavior should be to automatically close the window if true
    // traces.scorm.handleExitMode = false;

    // Defines if the exit should be:
    // - [true] "suspend" if completion status is "completed" or "passed",
    // - [false] or "normal"
    // traces.scorm.handleCompletionStatus = true;
};

/**
 * Sent after a 'DOMContentLoaded' event, and after SCORM and other API initialization
 */
traces.onInitialized = function() {
    // Send completed statement
    //traces.setToScorm(ScormCmiCode.COMPLETION_STATUS, 'completed');

    // Send passed statement
    //traces.setToScorm(ScormCmiCode.SUCCESS_STATUS, 'passed');
    //traces.setToScorm(ScormCmiCode.EXIT, 'normal');

    // Launch terminated statements (depends on your LMS)
    //traces.finaliseTracking();
};

/**
 * Sent after loading the first scene
 */
traces.onStart = function() {

};

/**
 * Sent before closing or reloading the browser page
 */
traces.onClose = function() {

};

traces.onTerminate = function() {

};