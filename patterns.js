
console.log(`-------------------------------------`);
console.log(`Test file paths`);
const filePathRegex = /^[CD]:\\.+/;

const filePathsTest = [
    "C:\\Program Files\\example.txt",  // this would work
    "D:\\documents\\example.docx",        // this would work
    "C:\\ file path abcd",           // this would work
    "K:\\pictures\\example.png",        // this would not work, "K:" is not a valid drive
    "testing_invalid.txt",             // this would not work, it's not a file path
];

for (let i = 0; i < filePathsTest.length; i++) {
    const filePath = filePathsTest[i];
    if (filePathRegex.test(filePath)) {
        console.log(`${filePath} is a valid path`);
    } else {
        console.log(`${filePath} is an invalid path`);
    }
}


console.log(`-------------------------------------`);
console.log(`Test email addresses:`);
const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const emailsTest = [
    "dav210558@gmail.com",     // this would work
    "johngreen12@gmail.com",  // this would work
    "lindav17@yahoo.com",     // this would not work, because it's not @gmail.com
    "johndoe@gmail.org",  // this would not work, because it's .org
    "janedoe@domain.com",    // this would not work, because it's not @gmail.com
];
for (let i = 0; i < emailsTest.length; i++) {
    const email = emailsTest[i];
    if (emailRegex.test(email)) {
        console.log(`${email} is a valid (gmail) address`);
    } else {
        console.log(`${email} is an invalid address`);
    }
}

console.log(`-------------------------------------`);
console.log(`Test domains`);
const domainRegex = /^(?:www\.)?example\.com$/;
const domainsTest = [
    "www.example.com",          // this would work
    "example.com",              // this would work
    "www.my-website.com", // this would not work
    "davies.example.com",      // this would not work, because it doesn't start with "www."
    "example.com/abcdef",    // this would not work, because it doesn't start with "www." and doesn't end with ".com"
];

for (const domain of domainsTest) {
    if (domainRegex.test(domain)) {
        console.log(`${domain} is a valid domain`);
    } else {
        console.log(`${domain} is an invalid domain`);
    }
}

console.log(`-------------------------------------`);
console.log(`Test URLs`);
const urlRegex = /^https:\/\/(?:www\.)?([a-zA-Z0-9-]+)\.[a-zA-Z]{2,}$/;

const urlTest = [
    "https://www.example.com", //this would work
    "https://my-website.net",  //this would work
    "http://invalid-url.com ",       //this would not work (http:// isn't valid)
    "https://sub_domain.invalid",     //this would not work
    "https://blog.testurl.org",  //this would not work
];

for (let i = 0; i < urlTest.length; i++) {
    const url = urlTest[i];
    if (urlRegex.test(url)) {
        console.log(`${url} is a valid URL`);
    } else {
        console.log(`${url} is an invalid URL`);
    }
}