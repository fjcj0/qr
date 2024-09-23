import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: {
        translation: {
          HeaderComponent: {
            HomeLink: "Home",
            AboutLink: "About",
            InformationLink: "Information",
            ContactLink: "Contact"
          },
          SignInComponent: {
            HeaderSignIn: "Login",
            InputPlaceHolderUserNameSignIn: "Username",
            InputPlaceHolderPasswordSignIn: "Password",
            ButtonSignIn: "Login",
            RememberPassword: "Remember me",
            ForgetPassword: "Forgot password?"
          },
          SignUpComponent: {
            HeaderSignUp: "Sign Up",
            InputPlaceHolderUserNameSignUp: "Username",
            InputPlaceHolderPasswordSignUp: "Password",
            InputPlaceHolderEmailSignUp: "Email",
            ButtonSignUp: "Sign Up"
          },
          MainComponent: {
            TitleMain: "Welcome to",
            TitleMainSpan: "Blue QR",
            ParagraphMain: "Blue, a pioneering tech company, introduces innovative QR solutions that streamline digital interactions, enhancing user engagement and connectivity.",
            CreateQrButton: "Create QR"
          },
          InformationComponent: {
            InformationTitle: "QR Information",
            FirstTitleCard: "What is a QR Code?",
            FirstParCard: "A QR code (Quick Response code) is a type of matrix barcode (or two-dimensional barcode) that contains information about the item to which it is attached.",
            SecondTitleCard: "How QR Codes Work",
            SecondParCard: "QR codes consist of black squares arranged on a white background in a square grid. These codes can be scanned by a device such as a smartphone or a QR code scanner.",
            ThirdTitleCard: "Applications of QR Codes",
            ThirdParCard: "QR codes are widely used in various industries, including marketing, retail, and payments. They can be used to quickly direct users to websites or download apps."
          },
          FooterComponent: {
            FooterAboutUsTitle: "About Us",
            FooterAboutUsPar: "We are a company that values quality and customer satisfaction above all else. Our mission is to provide the best products and services to our clients.",
            QuickLinksTitle: "Quick Links",
            QuickLinksHomeLink: "Home",
            QuickLinksServicesLink: "Services",
            QuickLinksAboutLink: "About",
            QuickLinksContactLink: "Contact",
            ContactUsTitle: "Contact Us",
            ContactUsEmail: "Email: info@company.com",
            ContactUsPhone: "Phone: +123-456-7890",
            ContactUsAddress: "Address: 1234 Street Name, City, Country",
            FollowUsTitle: "Follow Us",
            FooterBottom: "2024 Company Name. All Rights Reserved."
          },
          AboutComponent: {
            ContainerAboutTitle: "Benefits Of",
            ContainerAboutTitleSpan: "QR Code",
            FirstBenefitTitle: "1.",
            FirstBenefitTitleSpan: "Quick Access",
            FirstBenefitPar: "Instantly access information or websites by scanning the code.",
            SecondBenefitTitle: "2.",
            SecondBenefitTitleSpan: "Versatility",
            SecondBenefitPar: "Encode various data types like text, URLs, and contact details.",
            ThirdBenefitTitle: "3.",
            ThirdBenefitTitleSpan: "Enhanced Engagement",
            ThirdBenefitPar: "Link to interactive content, promotions, and multimedia.",
            FourthBenefitTitle: "4.",
            FourthBenefitTitleSpan: "Ease of Use",
            FourthBenefitPar: "Simple to create and scan with most smartphones."
          },
          QrComponent: {
            UrlLink: "Link URL",
            Apperence: "Appearance",
            ApperencePar: "Control appearance and element",
            Level: "Level",
            Logo: "Logo",
            Shape: "Shape",
            Frame: "Frame",
            Levels: ["Level L", "Level M", "Level H", "Level Q"],
            LevelsPer: ["7%", "15%", "30%", "25%"],
            LogoUpload: "Upload logo image",
            ChooseLogo: "Or choose from here",
            BorderAndBackground: "Corners and background",
            BorderColorShape: "Border Color",
            CenterColorShape: "Background Color",
            UseGradient: "Use gradient",
            TransparentBackground: "Transparent background",
            Corners: "Corner style",
            BorderCorners: "Border style",
            CenterCorners: "Center style",
            BorderColorCorner: "Border Center color",
            BackgroundColorCorner: "Background Center color",
            TextFrame: "Text",
            TextColorFrame: "Text color",
            FrameBackground: "Frame background",
            FramesCorner: "Frame corners",
            GenerateButtonQr: "Generate QR code",
            DownloadButtonQr: "Download QR code"
          },
          ProfileComponent: {
            QR_DASHBOARD: "QR-BLUE DASHBOARD",
            NEW_QR_CODE: "New QR code",
            Profile: "Profile",
            My_QR_code: "My QR codes",
            Plans_And_Payments: "Plans and payments",
            Settings: "Settings",
            Profile: "Profile",
            Name: "Name",
            Email: "Email",
            Password: "Password",
            QrCodes: "Qr codes",
            plansandpayments: "Plans and Payments",
            Basic_plan: "Basic Plan",
            Billed_annauly: "Billed annayly",
            Medium_Plan: "Medium Plan",
            Billed_semi_annualy: "Billed semi-annualy",
            Best_plan: "Best plan",
            Billed_quartitly: "Billed quartitly",
            BuyButton: "Buy",
            Settings: "Settings",
            contact_information: "Contact-information",
            nameinputplaceholder: "Name...",
            emailinputplaceholder: "Email...",
            passwordinputplaceholder: "Password...",
            buttonsave: "Save",
            ButtonDelete: "Delete",
            ChooseLanguage: "Choose language",
            DeleteAccount: "Deleteaccount",
            DeletePar: "Delete account with all information"
          }
        }
      },
      ar: {
        translation: {
          HeaderComponent: {
            HomeLink: "الرئيسية",
            AboutLink: "حول",
            InformationLink: "معلومات",
            ContactLink: "اتصال"
          },
          SignInComponent: {
            HeaderSignIn: "تسجيل الدخول",
            InputPlaceHolderUserNameSignIn: "اسم المستخدم",
            InputPlaceHolderPasswordSignIn: "كلمة المرور",
            ButtonSignIn: "تسجيل الدخول",
            RememberPassword: "تذكرني",
            ForgetPassword: "هل نسيت كلمة المرور؟"
          },
          SignUpComponent: {
            HeaderSignUp: "التسجيل",
            InputPlaceHolderUserNameSignUp: "اسم المستخدم",
            InputPlaceHolderPasswordSignUp: "كلمة المرور",
            InputPlaceHolderEmailSignUp: "البريد الإلكتروني",
            ButtonSignUp: "تسجيل"
          },
          MainComponent: {
            TitleMain: "مرحبا بك في",
            TitleMainSpan: "بلو كيو آر",
            ParagraphMain: "بلو، شركة تقنية رائدة، تقدم حلول QR مبتكرة تعمل على تبسيط التفاعلات الرقمية، وتعزز التفاعل والاتصال بين المستخدمين.",
            CreateQrButton: "إنشاء QR"
          },
          InformationComponent: {
            InformationTitle: "معلومات عن QR",
            FirstTitleCard: "ما هو رمز QR؟",
            FirstParCard: "رمز QR (رمز الاستجابة السريعة) هو نوع من الباركود المصفوفي (أو الباركود ثنائي الأبعاد) الذي يحتوي على معلومات حول العنصر الذي يت attached.",
            SecondTitleCard: "كيف تعمل رموز QR",
            SecondParCard: "تتكون رموز QR من مربعات سوداء مرتبة على خلفية بيضاء في شبكة مربعة. يمكن مسح هذه الرموز بواسطة جهاز مثل الهاتف الذكي أو جهاز مسح رموز QR.",
            ThirdTitleCard: "تطبيقات رموز QR",
            ThirdParCard: "تستخدم رموز QR على نطاق واسع في صناعات مختلفة، بما في ذلك التسويق، والتجزئة، والمدفوعات. يمكن استخدامها لتوجيه المستخدمين بسرعة إلى مواقع الويب أو تنزيل التطبيقات."
          },
          FooterComponent: {
            FooterAboutUsTitle: "معلومات عنا",
            FooterAboutUsPar: "نحن شركة تقدر الجودة ورضا العملاء فوق كل شيء. مهمتنا هي تقديم أفضل المنتجات والخدمات لعملائنا.",
            QuickLinksTitle: "روابط سريعة",
            QuickLinksHomeLink: "الرئيسية",
            QuickLinksServicesLink: "الخدمات",
            QuickLinksAboutLink: "حول",
            QuickLinksContactLink: "اتصال",
            ContactUsTitle: "اتصل بنا",
            ContactUsEmail: "البريد الإلكتروني: info@company.com",
            ContactUsPhone: "الهاتف: +123-456-7890",
            ContactUsAddress: "العنوان: 1234 اسم الشارع، المدينة، البلد",
            FollowUsTitle: "تابعنا",
            FooterBottom: "2024 اسم الشركة. جميع الحقوق محفوظة."
          },
          AboutComponent: {
            ContainerAboutTitle: "فوائد",
            ContainerAboutTitleSpan: "رمز QR",
            FirstBenefitTitle: "١.",
            FirstBenefitTitleSpan: "الوصول السريع",
            FirstBenefitPar: "الوصول الفوري إلى المعلومات أو المواقع الإلكترونية عن طريق مسح الرمز.",
            SecondBenefitTitle: "٢.",
            SecondBenefitTitleSpan: "التنوع",
            SecondBenefitPar: "ترميز أنواع بيانات مختلفة مثل النصوص، وعناوين URL، وتفاصيل الاتصال.",
            ThirdBenefitTitle: "٣.",
            ThirdBenefitTitleSpan: "تعزيز التفاعل",
            ThirdBenefitPar: "الارتباط بالمحتوى التفاعلي، والعروض الترويجية، ووسائط متعددة.",
            FourthBenefitTitle: "٤.",
            FourthBenefitTitleSpan: "سهولة الاستخدام",
            FourthBenefitPar: "بسيط لإنشائه ومسحه باستخدام معظم الهواتف الذكية."
          },
          QrComponent: {
            UrlLink: "رابط اللينك",
            Apperence: "المظهر",
            ApperencePar: "تحكم بالمظهر والعنصر",
            Level: "المستوى",
            Logo: "اللوغو",
            Shape: "الشكل",
            Frame: "الايطار",
            Levels: ["المستوى الاول", "المستوى الثاني", "المستوى الثالث", "المستوى الاخير",],
            LevelsPer: ["7٪", "15%", "30%", "25%"],
            LogoUpload: "حمل صورة اللوغو",
            ChooseLogo: "او اختر من هنا",
            BorderAndBackground: "الزوايا والخلفية",
            BorderColorShape: "لون الزوايا لشكل",
            CenterColorShape: "لون الخلفية لشكل",
            UseGradient: "اللون الممتزج",
            TransparentBackground: "خلفية شفافة",
            Corners: "ستايل الزوايا",
            BorderCorners: "ستايل الحدود لزوايا",
            CenterCorners: "ستايل الشكل لزوايا",
            BorderColorCorner: "لون حدود الزوايا",
            BackgroundColorCorner: "لون الخلفية لزوايا",
            TextFrame: "النص",
            TextColorFrame: "لون النص",
            FrameBackground: "خلفية الايطار",
            FramesCorner: "زوايا الايطار",
            GenerateButtonQr: "ترميز الشعار",
            DownloadButtonQr: "تحميل الشعار"
          },
          ProfileComponent: {
            QR_DASHBOARD: "لوحة القيادة QR-بلو",
            NEW_QR_CODE: "رمز QR جديد",
            Profile: "الملف الشخصي",
            My_QR_code: "رموز QR الخاصة بي",
            Plans_And_Payments: "الخطط والمدفوعات",
            Settings: "الإعدادات",
            Name: "الاسم",
            Email: "البريد الإلكتروني",
            Password: "كلمة المرور",
            QrCodes: "رموز QR",
            plansandpayments: "الخطط والمدفوعات",
            Basic_plan: "الخطة الأساسية",
            Billed_annauly: "فاتورة سنوية",
            Medium_Plan: "الخطة المتوسطة",
            Billed_semi_annualy: "فاتورة نصف سنوية",
            Best_plan: "الخطة الافضل",
            Billed_quartitly: "فاتورة ربع سنوية",
            BuyButton: "شراء",
            Settings: "الإعدادات",
            contact_information: "معلومات الاتصال",
            nameinputplaceholder: "الاسم...",
            emailinputplaceholder: "الايميل...",
            passwordinputplaceholder: "كلمة السر...",
            buttonsave: "حفظ",
            ButtonDelete: "حذف",
            ChooseLanguage: "اختر اللغة",
            DeleteAccount: "حذف الحساب",
            DeletePar: "حذف الحساب مع جميع المعلومات"
          }
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie']
    }
  });
export default i18n;