import { post } from '@aws-amplify/api';

async function ProcessChatTextAPI(content, sourceLang, targetLang) {
    const apiName = 'amazonTranslateAPI';
    const path = '/translate';
    const myInit = { // OPTIONAL
        body: { 'content': content, 'sourceLang': sourceLang, 'targetLang': targetLang },
        headers: {
        }, // OPTIONAL
    };
    console.log("ProcessChatTextAPI: ", content);
    console.log("ProcessChatTextAPI: ", sourceLang);
    console.log("ProcessChatTextAPI: ", targetLang);
    console.log("ProcessChatTextAPI: ", path);
    console.log("ProcessChatTextAPI: ", myInit);
    console.log("API Name: ", apiName);
    try {
        var result = await post({
            apiName,
            path,
            myInit,
        }).response
        console.log("ProcessChatTextAPI: ", result);
        return result; // result.data; // result.data.body; // result.data.body.content; // result.data.body.sourceLang; // result.data.body.targetLang; // result.data.body.terminologyNames; // result.data.body.translatedText
    }
    catch (error) {
        console.error("ProcessChatTextAPI: ", error);
        return error;
    }
}
export default ProcessChatTextAPI
