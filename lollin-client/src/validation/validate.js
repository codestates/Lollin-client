export default function validate(values) {
    let errors = {}

    if(!values.userId.trim()) {
        errors.userId = "ID required"
    }

    if(!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 8) {
        errors.password = "Password needs to be 8 characters or more"
    }

    if(!values.nickname.trim()) {
        errors.nickname = "LoL-Nickname required"
    }

    if(!values.email) {
        errors.email = "E-mail required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "E-mail address is invalid"
    }

    return errors;
}