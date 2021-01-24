## Developing

```sh
npm install -g tfx-cli
npm install -g @zeit/ncc
npm install -g gulp-cli
```

## Installing via CLI

This task can also be installed by going to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=JoshuaTheMiller.hello-world).

For more information, check out the Get started with [Azure DevOps CLI article from Microsoft](https://docs.microsoft.com/en-us/azure/devops/cli/?view=azure-devops#:~:text=%20To%20start%20using%20the%20Azure%20DevOps%20extension,az%20login%20to%20sign%20in.%20Not...%20More).

```sh
az login
# Make sure you have the correct Organization selected
az devops extension install --publisher-id JoshuaTheMiller --extension-id hello-world
```

### Force Refreshing

```sh
az devops extension disable --publisher-id JoshuaTheMiller --extension-id hello-world
az devops extension enable --publisher-id JoshuaTheMiller --extension-id hello-world
```

## Samples

* [Demo of different groups and visibility options in a task](https://github.com/microsoft/azure-pipelines-tasks/tree/master/Tasks/AndroidSigningV2)

## Publishing

*These instructions are for the future maintainer*

```sh
npm run package
```