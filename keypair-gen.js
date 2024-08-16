"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ed = __importStar(require("@noble/ed25519"));
async function main() {
    // Generate a secure random private key
    const privKey = ed.utils.randomPrivateKey();
    // Convert the message "hello world" to a Uint8Array
    const message = new TextEncoder().encode("hello world");
    // Generate the public key from the private key
    const pubKey = await ed.getPublicKeyAsync(privKey);
    // Sign the message
    const signature = await ed.signAsync(message, privKey);
    // Verify the signature
    const isValid = await ed.verifyAsync(signature, message, pubKey);
    // Output the result
    console.log(isValid); // Should print `true` if the signature is valid
}
main();
