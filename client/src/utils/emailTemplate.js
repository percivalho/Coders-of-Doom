export const generateEmailTemplate = (firstName) => {
    return `
      <html>
        <head>
            <style>
                .email-content {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    background-color: #f9f9f9;
                    border: 1px solid #e0e0e0;
                    border-radius: 5px;
                }
                .email-header {
                    background-color: #4CAF50;
                    color: white;
                    padding: 10px;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="email-content">
                <div class="email-header">Fitness Direct</div>
                <p>
                    Dear ${firstName},
                </p>
                <p>
                We noticed you left some items in your cart, and we wanted to make sure you didn't have any issues during checkout. We value you as our customer, so we've reserved the items just for you!
                </p>
  
                <p>
                    Warm Regards,<br>
                    Fitness Direct
                </p>
            </div>
        </body>
      </html>
    `;
};
