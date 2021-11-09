
export const helloWorld = (carrinho, total) => {
	return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset=" UTF-8 " />
        <meta name=" viewport " content=" width=device-width, initial-scale=1.0 " />
        <title>Comprovante</title>
        <style>
            a {
            text-decoration: none;
            }
            a:-webkit-any-link {
            text-decoration: none; 
            }
            hr {
            border: 1px solid #ddd; 
            }
            table {
            border-collapse: collapse; 
            background-color: #fff; 
            }
            span {
            display: block; 
            color: #333; 
            font-family: 'Proxima Nova', san-serif;
            font-weight: 500;
            text-decoration: none;
            font-size: 14px;
            }
            .clearfix {
            clear: both; 
            }
            .mcnCaptionBottomImageContent {
            width: 600px; 
            }
            .order-placed {
            width: 100%; 
            margin-bottom: 25px; 
            }
            .product-image {
            width: 200px; 
            padding: 20px; 
            }
            .text-container {
            padding: 20px 10px; 
            }
            .notice-container{
            border: 2px solid #ddd; 
            width: 90%; 
            text-transform: none; 
            display: block; 
            margin: 0 auto; 
            margin-bottom: 15px; 
            text-align: center; 
            }
            .florist-image {
            width: 50px;
            border-radius: 25px; 
            display: block; 
            margin: 0 auto 5px auto; 
            }
            .shop-name {
            font-weight: 700; 
            }
            .delivery-info {
            width: 90%; 
            margin: 0 auto 20px auto; 
            }
            .delivery-info--title,
            .order-summary--title {
            text-transform: uppercase; 
            font-weight: 700; 
            }
            .order-summary--title {
            width: 90%; 
            margin: 0 auto; 
            }
            .delivery-info--recipient,
            .delivery-info--card,
            .delivery-info--instr,
            .delivery-info--subs,
            .order-detail--title {
            font-weight: 700;
            }
            .order-summary-contact {
            float: left; 
            width: 60%; 
            }
            .order-summary-total {
            float:right; 
            width: 40%; 
            }
            .order-summary-btn { 
            margin: 20px; 
            color: #369ea3;
            padding: 8px 20px; 
            border: 1px solid #369ea3; 
            border-radius: 4px; 
            }
    
            .order-summary-container, 
            .questions-container {
            margin: 15px auto;
            width: 90%; 
            border-top: 2px solid #ddd; 
            }
            .order-summary-container{
            padding-top: 20px; 
            }
            .florist-questions,
            .billing-questions,
            .chatnow {
            width: 50%; 
            text-align:center;
            }
            .florist-questions {
            margin: 20px auto; 
            float:left; 
            }
            .billing-questions {
            margin: 20px auto; 
            float:right;
            }
            .chatnow {
            margin: 0 auto 15px auto; 
            text-decoration: underline; 
            color: #0082B5; 
            }
            .fine-print {
            text-align: center; 
            font-size: 10px; 
            font-weight: 700; 
            }
            .footer { 
            background-color: #369ea3;
            padding: 20px 0; 
            }
            .footer span {
            display: block; 
            text-align: center;
            margin: 0 auto;
            width: 70%;
            padding: 10px 0; 
            color: #fff; 
            text-transform: none; 
            font-size: 10px; 
            }
            i {
            padding: 0 15px
            }
        </style>
      </head>
      <body>
    
    <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="border-collapse: collapse;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;background-color: #F2F2F2;height: 100% !important;width: 100% !important;">
        <tbody>
            <tr>
                <td align="center" valign="top" id="bodyCell" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 20px;border-top: 0;height: 100% !important;width: 100% !important;">
                    <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateContainer" style="border-collapse: collapse;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;border: 0;">
                        <tbody>
                            <tr>
                                <td align="center" valign="top" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateBody" style="border-collapse: collapse;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #FFFFFF;border-top: 0;border-bottom: 0;">
                                        <tbody>
                                            <tr>
                                                <td valign="top" class="bodyContainer" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="border-collapse: collapse;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                    <tbody class="mcnTextBlockOuter">
                                                    <tr>
                                                        <td valign="top" class="mcnTextBlockInner" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="border-collapse: collapse;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                    <tbody class="mcnDividerBlockOuter">
                                                    <tr>
                                                        <td class="mcnDividerBlockInner" style="padding: 18px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                        <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                            <tr>
                                                                <td style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                <span></span>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="order-summary"><span class="order-summary--title">Produtos: <br /><hr /></span></td>
                                                    </tr>
                                                    <tr>
                                                        <table>
                                                            <tr>
                                                                <td width="5%"></td>
                                                                <td width="40%"><span class="order-detail--title">Produto</span></td>
                                                                <td width="20%"><span class="order-detail--title">Preço</span></td>
                                                                <td width="20%"><span class="order-detail--title">Quantidade</span></td>
                                                                <td width="20%"><span class="order-detail--title">Total</span></td> 
                                                                <td width="5%"></td>
                                                            </tr>
                                                            ${carrinho.map(item => {
                                                                return`<tr>
                                                                    <td></td>
                                                                    <td><span>${item.produto.nome}</span></td>
                                                                    <td><span>${`R$ ${(item.precoindividual).toFixed(2)}`}</span></td>
                                                                    <td><span>${item.quantidade}</span></td>
                                                                    <td><span>${`R$ ${(item.quantidade * item.precoindividual).toFixed(2)}`}</span></td>
                                                                    <td></td>
                                                                </tr>`
                                                            })}
                                                            
                                                        </table>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                        <div class="order-summary-container">
                                                          
                                                            <div class="order-summary-total">
                                                                <span>Total: ${`R$ ${(total).toFixed(2)}`}</span>
                                                                <hr />
                                                            </div>
                                                            <div class="clearfix"></div>
                                                        </div>
                                                        
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    
    
      </body>
    </html>
    `;
}