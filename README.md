# CoinCodex Fiyat Analizi Haber Bildirimi

Bu Node.js betiği, CoinCodex web sitesinden güncel fiyat analizi haberlerini çeker ve izler. Belirli aralıklarla güncellemeleri kontrol eder ve yeni bir başlık tespit edildiğinde belirtilen bir alıcıya e-posta bildirimi gönderir. Betik sürekli olarak çalışacak şekilde tasarlanmıştır ve haberleri her dakika yeniler.

## Gereksinimler

1. Sisteminizde Node.js'in kurulu olması gerekmektedir.
2. Gerekli Node.js paketlerinin yüklü olduğundan emin olun. Bağımlılıkları yüklemek için projenizin dizininde `npm install axios cheerio nodemailer dotenv` komutunu çalıştırın.

## Kullanım

1. Betikle aynı dizinde `email.env` adında bir dosya oluşturun ve içine aşağıdaki bilgileri ekleyin:
outlookAddress=outlook_eposta_adresiniz
outlookPassword=outlook_eposta_sifreniz
recipientEmail=alici_eposta_adresi
`outlook_eposta_adresiniz`, `outlook_eposta_sifreniz` ve `alici_eposta_adresi` yerine uygun değerleri yazın.

2. Betikteki `url` değişkenini istediğiniz CoinCodex fiyat analizi haber kategorisi URL'si ile güncelleyin, gerekiyorsa değişiklik yapın.

3. Betiği `node script_adi.js` komutu ile çalıştırın (`script_adi.js` yerine gerçek dosya adını yazın).

**Notlar:**
- Betik sürekli olarak güncellemeleri kontrol eder ve yeni bir başlık tespit edildiğinde e-posta gönderir.
- Kişisel e-posta kimlik bilgilerini korumak için bildirimleri göndermek için ayrı bir e-posta hesabı kullanmanız önerilir.

## Sorumluluk Reddi

Bu betik yalnızca eğitim ve bilgi amaçlıdır. Sorumlu bir şekilde ve kendi riskinizde kullanın. Yazar, bu betik tarafından neden olabilecek herhangi bir yanlış kullanımdan veya hasardan sorumlu değildir.



# CoinCodex Price Analysis News Notifier

This Node.js script fetches and monitors the latest price analysis news from CoinCodex's website. It periodically checks for updates and sends an email notification to a specified recipient when a new headline is detected. The script is designed to run continuously, refreshing the news every minute.

## Prerequisites

1. Node.js should be installed on your system.
2. Ensure you have the required Node.js packages installed. Run `npm install axios cheerio nodemailer dotenv` in the project directory to install the dependencies.

## Usage

1. Create a file named `email.env` in the same directory as the script, containing the following information:

outlookAddress=your_outlook_email_address
outlookPassword=your_outlook_email_password
recipientEmail=recipient_email_address

Replace `your_outlook_email_address`, `your_outlook_email_password`, and `recipient_email_address` with appropriate values.

2. Update the `url` variable in the script to the desired CoinCodex price analysis news category URL if needed.

3. Run the script with the command `node script_name.js` (replace `script_name.js` with the actual file name).

**Note:**
- The script will continuously check for updates and send an email when a new headline is detected.
- It is recommended to use a separate email account for sending notifications to avoid exposing personal email credentials.

## Disclaimer

This script is for educational and informational purposes only. Use it responsibly and at your own risk. The author is not responsible for any misuse or damages caused by this script.
