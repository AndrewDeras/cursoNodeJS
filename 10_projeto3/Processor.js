class Processor {

  static Process(data) {
    let a = data.split('\n');
    let rows = [];

    a.forEach(row => {
      let arr = row.split(',');
      rows.push(arr);
    });

    return rows;
  }

}

module.exports = Processor;