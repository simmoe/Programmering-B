
const select = (e, p) =>{
    var container = this._getContainer(p);
    var res = container.querySelector(e);
    if (res) {
      return this._wrapElement(res);
    } else {
      return null;
    }
}
  
  const html = (txt) => this.innerHTML = txt


console.log( select('#info') )
