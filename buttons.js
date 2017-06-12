const buttonText = {
  //"string that has to be included in Watson output text" : button array index in buttons defined below.
  "offres Plus, Pro, et Ultra": 0,
  "par oui ou non": 1,
  "Voulez-vous ": 1,
  "Voulez vous": 1,
  "voulez vous": 1,
  "voulez-vous ": 1,
  "Avez-vous ": 1,
  "avez-vous ": 1,
  "Avez vous ": 1,
  "avez vous ": 1,
  "est-ce bien": 1,
  "Tout est bon pour vous": 1,
  "vous préférez peut-être télé": 1,
  "Souhaitez-vous": 1,
  "Vous pouvez modifier votre offre": 2,
  "Nous proposons deux bouquets": 3
}
const buttons = [
  ['Plus', 'Pro', 'Ultra'],
  ['Oui', 'Non'],
  ['Adresse', 'Identité', 'Offre', 'Options TV', 'Moyen de paiement'],
  ['Canal+', 'CanalSat', 'Les deux', 'Aucun']
]
module.exports = {
  /**
   * Returns button array if necessary.
   * The rules to react are set in the static arrays buttonText and buttons.
   * @param   {string}               text    text from Watson
   * @return  {Object or boolean}            buttons or false if not needed
   */
  sendWithButtons: function(text) {
    if (Object.keys(buttonText).length !== 0) {
      for (button in buttonText) {
        if (text.indexOf(button) !== -1) return buttons[buttonText[button]];
      }
    }
    return false;
  }
}
