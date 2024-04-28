/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        }
    }
}

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = `
        <amazon:emotion name="excited" intensity="high">
        
            <p>hello</p>
            
        </amazon:emotion>
        `
        const DOCUMENT_ID = "anantalogo"
        const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
            return {
                type: "Alexa.Presentation.APL.RenderDocument",
                token: tokenId,
                document: {
                    type: "Link",
                    src: "doc://alexa/apl/documents/" + aplDocumentId
                },
                datasources: dataSources
            }
        }
        const datasource = {
            "imageListData": {
                "type": "object",
                "objectId": "paginatedListSample",
                "title": "",
                "listItems": [
                    {
                        "primaryText": "",
                        "secondaryText": "",
                        "imageSource": "https://i.imgur.com/Z6ZE3wI.png",
                        "primaryAction": [
                            {
                                "type": "SetValue",
                                "componentId": "paginatedList",
                                "property": "headerTitle",
                                "value": "Home Garden 1 is selected"
                            }
                        ]
                    }
                ],
                "logoUrl": "https://i.imgur.com/VVd2M2i.png"
            }
        }
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            
            handlerInput.responseBuilder.addDirective(aplDirective);
        }


         return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};


const introanantHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest"
            && Alexa.getIntentName(handlerInput.requestEnvelope) === "introanant"
    },
    handle(handlerInput) {
        const speakOutput = `
        <amazon:emotion name="excited" intensity="high">
            <p>Ladies and gentlemen, it is my great pleasure to welcome you to this auspicious occasion - the inauguration of ANANTA 2024. Today, we come together to mark a new beginning, to celebrate the fruits of our labor, and to set our sights on a bright and promising future.</p>
        </amazon:emotion>
        `
        const DOCUMENT_ID = "anantalogo"
        const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
            return {
                type: "Alexa.Presentation.APL.RenderDocument",
                token: tokenId,
                document: {
                    type: "Link",
                    src: "doc://alexa/apl/documents/" + aplDocumentId
                },
                datasources: dataSources
            }
        }
        const datasource = {
            "imageListData": {
                "type": "object",
                "objectId": "paginatedListSample",
                "title": "",
                "listItems": [
                    {
                        "primaryText": "",
                        "secondaryText": "",
                        "imageSource": "https://i.imgur.com/Z6ZE3wI.png",
                        "primaryAction": [
                            {
                                "type": "SetValue",
                                "componentId": "paginatedList",
                                "property": "headerTitle",
                                "value": "Home Garden 1 is selected"
                            }
                        ]
                    }
                ],
                "logoUrl": "https://i.imgur.com/VVd2M2i.png"
            }
        }
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const shlokHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest"
            && Alexa.getIntentName(handlerInput.requestEnvelope) === "shlok"
    },
    handle(handlerInput) {
        const speakOutput = `
        <amazon:emotion name="excited" intensity="high">
            <p>sure</p>
        </amazon:emotion>
        `
        const DOCUMENT_ID = "shlokvideo"
        const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
            return {
                type: "Alexa.Presentation.APL.RenderDocument",
                token: tokenId,
                document: {
                    type: "Link",
                    src: "doc://alexa/apl/documents/" + aplDocumentId
                },
                datasources: dataSources
            }
        }
        const datasource = {
            "imageListData": {
                "type": "object",
                "objectId": "paginatedListSample",
                "title": "",
                "listItems": [
                    {
                        "primaryText": "",
                        "secondaryText": "",
                        "imageSource": "https://i.imgur.com/Z6ZE3wI.png",
                        "primaryAction": [
                            {
                                "type": "SetValue",
                                "componentId": "paginatedList",
                                "property": "headerTitle",
                                "value": "Home Garden 1 is selected"
                            }
                        ]
                    }
                ],
                "logoUrl": "https://i.imgur.com/VVd2M2i.png"
            }
        }
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
        }
};

const classicaldanceHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest"
            && Alexa.getIntentName(handlerInput.requestEnvelope) === "classicaldance"
    },
    handle(handlerInput) {
        const speakOutput = `
        <amazon:emotion name="excited" intensity="high">
            <p>Sure! Keeping this soulful thought in mind, we present to you a graceful performance by abcd efgh to welcome you all in the most elegant way.</p>
        </amazon:emotion>
        `
    //     const DOCUMENT_ID = "anantalogo"
    //     const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    //         return {
    //             type: "Alexa.Presentation.APL.RenderDocument",
    //             token: tokenId,
    //             document: {
    //                 type: "Link",
    //                 src: "doc://alexa/apl/documents/" + aplDocumentId
    //             },
    //             datasources: dataSources
    //         }
    //     }
    //     const datasource = {
    //         "imageListData": {
    //             "type": "object",
    //             "objectId": "paginatedListSample",
    //             "title": "",
    //             "listItems": [
    //                 {
    //                     "primaryText": "",
    //                     "secondaryText": "",
    //                     "imageSource": "https://i.imgur.com/Z6ZE3wI.png",
    //                     "primaryAction": [
    //                         {
    //                             "type": "SetValue",
    //                             "componentId": "paginatedList",
    //                             "property": "headerTitle",
    //                             "value": "Home Garden 1 is selected"
    //                         }
    //                     ]
    //                 }
    //             ],
    //             "logoUrl": "https://i.imgur.com/VVd2M2i.png"
    //         }
    //     }
        
    //     if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            
    //         const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            
    //         handlerInput.responseBuilder.addDirective(aplDirective);
    //     }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const dancereviewHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest"
            && Alexa.getIntentName(handlerInput.requestEnvelope) === "dancereview"
    },
    handle(handlerInput) {
        const speakOutput = `
        <amazon:emotion name="excited" intensity="high">
            <p>Well, That performance was the perfect way to commence this beautiful ceremony. Thank you, urvee, for your exceptional performance.</p>
        </amazon:emotion>
        `
    //     const DOCUMENT_ID = "anantalogo"
    //     const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    //         return {
    //             type: "Alexa.Presentation.APL.RenderDocument",
    //             token: tokenId,
    //             document: {
    //                 type: "Link",
    //                 src: "doc://alexa/apl/documents/" + aplDocumentId
    //             },
    //             datasources: dataSources
    //         }
    //     }
    //     const datasource = {
    //         "imageListData": {
    //             "type": "object",
    //             "objectId": "paginatedListSample",
    //             "title": "",
    //             "listItems": [
    //                 {
    //                     "primaryText": "",
    //                     "secondaryText": "",
    //                     "imageSource": "https://i.imgur.com/Z6ZE3wI.png",
    //                     "primaryAction": [
    //                         {
    //                             "type": "SetValue",
    //                             "componentId": "paginatedList",
    //                             "property": "headerTitle",
    //                             "value": "Home Garden 1 is selected"
    //                         }
    //                     ]
    //                 }
    //             ],
    //             "logoUrl": "https://i.imgur.com/VVd2M2i.png"
    //         }
    //     }
        
    //     if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            
    //         const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            
    //         handlerInput.responseBuilder.addDirective(aplDirective);
    //     }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const chiefguestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest"
            && Alexa.getIntentName(handlerInput.requestEnvelope) === "chiefguest";
    },
    handle(handlerInput) {
        const speakOutput = `
        <amazon:emotion name="excited" intensity="high">
            <p>Sure, First we have with us our chief guest ABC sitting over here. He is the Mission Director at Atal Innovation Mission. Niti Aayog, Government of India and Academic Director at MIT, USA. His focus lies in leveraging his expertise in engineering and innovation to address the intersection of human and technological challenges.</p>
            
            <p>Then we have our guest of honor DEF with over 25 years at Tata Consultancy Services, retired as Advisor in Human Resources in March 2022. His leadership roles included heading TCS IIIT (PPP) Relationships, Academic Interface Programme, and Corporate Learning facility. Additionally, he served on the boards of IIITs and ICT Academy of Kerala, chaired by the Union Minister of Education. Prior to TCS, he spent a decade at ISRO, contributing significantly to software evaluation and standards. DEF remains actively engaged in academia and has 46 years of diverse experience. </p>
            
            <p>Then we have our distinguished guest GHI. He is the Founder and CEO of Phonon Communications private limited. He holds degrees in Electronics Engineering and an MBA from IIM Calcutta. Renowned for his expertise in service automation. He is regarded as a technology visionary. Additionally, he excels in concept sales and is recognized for his meticulous attention to detail. With exceptional analytical, management, and interpersonal skills, he is known as a highly capable and proficient manager.</p>

        </amazon:emotion>
        `
        
        const DOCUMENT_ID = "chiefguest";
        const datasource = {
            "imageListData": {
                "type": "object",
                "objectId": "paginatedListSample",
                "title": "",
                "listItems": [
                    {
                        "primaryText": "",
                        "secondaryText": "",
                        "imageSource": "https://firebasestorage.googleapis.com/v0/b/ananta-24-inaugral.appspot.com/o/dignitaries.png?alt=media&token=144a099f-0e3e-4bd1-9ca3-bf6704f73db3",
                        "primaryAction": [
                            {
                                "type": "SetValue",
                                "componentId": "paginatedList",
                                "property": "headerTitle",
                                "value": "Home Garden 1 is selected"
                            }
                        ]
                    }
                ],
                "logoUrl": "https://firebasestorage.googleapis.com/v0/b/ananta-24-inaugral.appspot.com/o/dignitaries.png?alt=media&token=144a099f-0e3e-4bd1-9ca3-bf6704f73db3"
            }
        };

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

// const guestofhonorHandler = {
//     canHandle(handlerInput) {
//         return Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest"
//             && Alexa.getIntentName(handlerInput.requestEnvelope) === "guestofhonor"
//     },
//     handle(handlerInput) {
//         const speakOutput = `
//         <amazon:emotion name="excited" intensity="high">
//             <p>Doctor K KESAVASAMY is a Learner and an Educator. Previously he was a software scientist at ISRO and a member of TCS's advisory board, now serves on the Board of Governors of IIIT's.</p>
//         </amazon:emotion>
//         `
//         const DOCUMENT_ID = "guestofhonor"
//         const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
//             return {
//                 type: "Alexa.Presentation.APL.RenderDocument",
//                 token: tokenId,
//                 document: {
//                     type: "Link",
//                     src: "doc://alexa/apl/documents/" + aplDocumentId
//                 },
//                 datasources: dataSources
//             }
//         }
//         const datasource = {
//             "imageListData": {
//                 "type": "object",
//                 "objectId": "paginatedListSample",
//                 "title": "",
//                 "listItems": [
//                     {
//                         "primaryText": "",
//                         "secondaryText": "",
//                         "imageSource": "https://i.imgur.com/Z6ZE3wI.png",
//                         "primaryAction": [
//                             {
//                                 "type": "SetValue",
//                                 "componentId": "paginatedList",
//                                 "property": "headerTitle",
//                                 "value": "Home Garden 1 is selected"
//                             }
//                         ]
//                     }
//                 ],
//                 "logoUrl": "https://i.imgur.com/VVd2M2i.png"
//             }
//         }
        
//         if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            
//             const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            
//             handlerInput.responseBuilder.addDirective(aplDirective);
//         }
        
//         return handlerInput.responseBuilder
//             .speak(speakOutput)
//             .getResponse();
//     }
// };

// const distinguishedguestHandler = {
//     canHandle(handlerInput) {
//         return Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest"
//             && Alexa.getIntentName(handlerInput.requestEnvelope) === "distinguishedguest"
//     },
//     handle(handlerInput) {
//         const speakOutput = `
//         <amazon:emotion name="excited" intensity="high">
//             <p>Mister UJWAL MAKHIJA is the Founder and CEO of Phonon Communications private limited. He holds degrees in Electronics Engineering and an MBA from IIM Calcutta. Renowned for his expertise in service automation. He is regarded as a technology visionary. Additionally, he excels in concept sales and is recognized for his meticulous attention to detail. With exceptional analytical, management, and interpersonal skills, he is known as a highly capable and proficient manager.</p>
//         </amazon:emotion>
//         `
//         const DOCUMENT_ID = "distinguishedguest"
//         const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
//             return {
//                 type: "Alexa.Presentation.APL.RenderDocument",
//                 token: tokenId,
//                 document: {
//                     type: "Link",
//                     src: "doc://alexa/apl/documents/" + aplDocumentId
//                 },
//                 datasources: dataSources
//             }
//         }
//         const datasource = {
//             "imageListData": {
//                 "type": "object",
//                 "objectId": "paginatedListSample",
//                 "title": "",
//                 "listItems": [
//                     {
//                         "primaryText": "",
//                         "secondaryText": "",
//                         "imageSource": "https://i.imgur.com/Z6ZE3wI.png",
//                         "primaryAction": [
//                             {
//                                 "type": "SetValue",
//                                 "componentId": "paginatedList",
//                                 "property": "headerTitle",
//                                 "value": "Home Garden 1 is selected"
//                             }
//                         ]
//                     }
//                 ],
//                 "logoUrl": "https://i.imgur.com/VVd2M2i.png"
//             }
//         }
        
//         if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            
//             const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            
//             handlerInput.responseBuilder.addDirective(aplDirective);
//         }
        
//         return handlerInput.responseBuilder
//             .speak(speakOutput)
//             .getResponse();
//     }
// };

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'okay goodbye';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'please repeat.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'please repeat';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        chiefguestHandler,
        introanantHandler,
        // guestofhonorHandler,
        shlokHandler,
        classicaldanceHandler,
        dancereviewHandler,
        // distinguishedguestHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
