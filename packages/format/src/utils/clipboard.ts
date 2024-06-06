/*
* 写入内容到剪贴板
* @param text - 要写入剪贴板的文本内容
* @returns 返回一个Promise，可以通过then和catch来处理结果
*/
export function writeToClipboard(text: object): Promise<void> {
    return new Promise((resolve, reject) => {
        try {
            navigator.clipboard.writeText(JSON.stringify(text, null, 2))
                .then(() => {
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        } catch (error) {
            reject(error);
        }
    });
}