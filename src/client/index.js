import { checkForName } from './js/nameChecker'
import { postData } from './js/postData'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

console.log(checkForName);

export {
    checkForName,
    postData,
    handleSubmit
}