module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const responseMessage = "Hello from the Sachin who enabled proxy setting...!!!"
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
          text: `response: ${responseMessage}`
        },
      };
}
