import tl = require('azure-pipelines-task-lib/task');
import toolLib = require('azure-pipelines-tool-lib/tool');
import os = require('os');
import path = require('path');

async function run() {
    const {platform, supported} = getFormattedPlatform(os.platform());    

    if (supported == false) {
        tl.setResult(tl.TaskResult.Failed, `${platform} is not a supported platform for this tool.`);
            return;
    }

    const version = tl.getInput('version', true);
    if (version == 'bad' || version == undefined) {
        tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
        return;
    }    

    const downloadUrl = downloadZipUrl(version, platform);    
    
    const temp: string = await toolLib.downloadTool(downloadUrl);
    const extractRoot: string = await toolLib.extractZip(temp);

    toolLib.prependPath(extractRoot);
}

function getFormattedPlatform(platform:string) {
    if(platform == "linux") {
        return { 
            platform:"linux", 
            supported: true
        };
    }

    if(platform == "win32") {
        return { 
            platform:"windows", 
            supported: true
        };
    }

    return { 
        platform:"platform", 
        supported: false
    };        
}

function downloadZipUrl(version:string, platform:string) {
    console.log(`Finding release for version '${version}', and operating system '${platform}'`);
    return `https://github.com/JoshuaTheMiller/HelloWorld-AzureDevOpsPlugin/releases/download/app-v${version}/${platform}_amd64.zip`;
}

run();