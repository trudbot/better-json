type Result = {
    type: 'url' | 'text';
    value: string;
};

export function extractUrls(input: string): Result[] {
    const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
    const results: Result[] = [];

    let lastIndex = 0;
    let match;

    while ((match = urlRegex.exec(input)) !== null) {
        if (match.index > lastIndex) {
            results.push({
                type: 'text',
                value: input.substring(lastIndex, match.index)
            });
        }
        results.push({
            type: 'url',
            value: match[0]
        });
        lastIndex = match.index + match[0].length;
    }

    if (lastIndex < input.length) {
        results.push({
            type: 'text',
            value: input.substring(lastIndex)
        });
    }

    return results;
}