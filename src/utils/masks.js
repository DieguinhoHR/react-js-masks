function cpfMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

function cnpjMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export { }

function phoneMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(-\d{4})\d+?$/, '$1')
}

function cepMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

function pisMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{5})(\d)/, '$1.$2')
    .replace(/(\d{5}\.)(\d{2})(\d)/, '$1$2-$3')
    .replace(/(-\d{1})\d+?$/, '$1')
}


function identidadeMask (value) {
  return value
  .replace(/\D/g, '')
  .replace(/(\d{2})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1-$2')
  .replace(/(-\d{1})\d+?$/, '$1')
}

function realMoedaMask (value) {
  String(value)
  
      value = value 
          .replace(/\D/g, '')
          .replace(/([0-9]{2})$/g, ",$1")
      
      if( value.length > 6 )
         value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")

      return value
 }

export { 
  cpfMask, 
  cnpjMask, 
  phoneMask, 
  cepMask, 
  pisMask,
  identidadeMask,
  realMoedaMask
}

