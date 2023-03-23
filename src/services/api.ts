
function doesIdExist(id: string): boolean {
    if(id == "123456") return true;
    return false;
}

function getFileLink(id: string): string|null {
    if(id == "123456") return "https://picsum.photos/500";
    return null;
}

export default {
    doesIdExist,
    getFileLink,
}