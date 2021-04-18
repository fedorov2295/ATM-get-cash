const cashStore = {
  100: 3,
  500: 9,
  1000: 6,
  5000: 4
};


function getCash(sum, cashStore) {
  function cashReturn(sum, nominals) {
    let currentNominal = nominals[0]; // текущий просматриваемый номинал
    let nominalInStore = cashStore[currentNominal]; // сколько доступна купюр текущего номинала в банкомате
    let currentNominalNecessary = Math.floor(sum / currentNominal); // сколько необходимо купюр текущего номинала
    let count = Math.min(nominalInStore, currentNominalNecessary); // если купюр текущего номинала нужно больше чем есть в банкомате, то отдаем все что есть в наличии
  
    for (let i = count; i >= 0; i--) {
      let result = cashReturn(sum - i * currentNominal, nominals.slice(1)); // отнимаем от введенной суммы то что уже выдали и отсекаем выданный номинал купюры
      if (result) {
        return i ? { [currentNominal]: i, ...result } : result;
      }
    }
  
    if (sum == 0) return {};
    if (!nominals.length) {
      throw new Error('Not enough money.');
    };
    if (sum%100 != 0) {
      throw new Error('Enter a valid number.');
    }
  }
  let nominalValues = Object.keys(cashStore).map(Number).sort((a, b) => b - a)
  return cashReturn(sum, nominalValues);
}

exports.getCash = getCash;
exports.cashStore = cashStore;
