const useMask = () => {
  function maskNumber(value) {
    return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  }

  function maskView(value) {
    const v = maskNumber(value);
    let r = '';
    let brk = false;
    let u = '';
    for (let i = 0; i < v.length; i++) {
      r += v[i];

      if (brk) {
        break;
      }

      if (v[i] === '.') {
        brk = true;
      }
    }
    u = r.split('.').length - 1;

    switch (u) {
      case 1:
        return r + 'K';
      case 2:
        return r + 'M';
      case 3:
        return r + 'B';
      case 4:
        return r + 'T';
      default:
        return value;
    }
  }

  return {
    number: maskNumber,
    view: maskView,
  };
};

export default useMask;
