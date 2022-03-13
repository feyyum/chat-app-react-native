const solveErrorMessage = (err) => {
    switch (err.code) {
        case "auth/unknown":
            return "Bilinmeyen bir hata oluştu!"
        case "auth/invalid-phone-number":
            return "Lütfen geçerli bir telefon numarası giriniz!"
        case "auth/invalid-verification-code":
            return "Geçersiz doğrulama kodu!"
        default:
            return err.message
    }
}

export default solveErrorMessage