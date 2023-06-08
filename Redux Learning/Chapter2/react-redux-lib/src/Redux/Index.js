// action names 

export const deposit = 'account/deposit';
export const withdraw = 'account/withdraw';
export const depositAmount = 'account/depositAmount';
export const withdrawAmount = 'account/withdrawAmount';

// action creators 

export function depositAction() {
    return { type: deposit,payload:200};
}
export function withdrawAction() {
    return { type: withdraw,payload:100};
}
export function depositActionByAmount(value) {
    return { type: depositAmount,payload:value};
}
export function withdrawActionByAmount(value) {
    return { type: withdrawAmount,payload:value};
}