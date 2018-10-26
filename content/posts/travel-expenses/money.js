function formatNum(num, type) {
  switch (type) {
    case "count":
      return formatCommas(num, 0);
    case "cost":
      return "$" + formatCost(num);
    case "miles":
      return formatCommas(num, 0) + " mi";
    case "avg cost":
      return "$" + formatCost(num) + "/mi";
    default:
      return num;
  }
}

function toFloat(str) {
  return parseFloat(str.toString().replace(/[^.0-9]/g, ""));
}

function formatCommas(num, fixed) {
  fixed = typeof fixed === "undefined" ? 2 : fixed;
  if (!!parseFloat(num)) {
    return parseFloat(num)
      .toFixed(fixed)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return num;
  }
}

function formatCost(num) {
  return parseFloat(num)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

function createTable(data, config) {
  var table = d3.select("table#" + config.file);
  var thead = table.append("thead");
  var tbody = table.append("tbody");
  var tfoot = table.append("tfoot");
  var total = ["Total"];

  // append the header row
  thead
    .append("tr")
    .selectAll("th")
    .data(config.data)
    .enter()
    .append("th")
    .text(function(column) {
      return column[0];
    });

  // create a row for each object in the data
  var rows = tbody
    .selectAll("tr")
    .data(data)
    .enter()
    .append("tr");

  // create a cell in each row for each column
  var cells = rows
    .selectAll("td")
    .data(function(row, rowIndex) {
      var x = config.data.map(function(column, index) {
        if (!!parseFloat(row[column[0]])) {
          total[index] = total[index] || 0;
          if (column[0].indexOf("avg") >= 0) {
            // Average
            var numberOfItemsInAverage = rowIndex;
            var runningSum = toFloat(total[index]) * numberOfItemsInAverage;
            var newSum = runningSum + parseFloat(row[column[0]]);
            var newAverage = newSum / (rowIndex + 1);
            var formatted = formatNum(newAverage, column[2]);
            total[index] = formatted;
          } else {
            // Total
            // Return total[index] to a float
            total[index] = toFloat(total[index]);
            // Add to the running total
            total[index] += parseFloat(row[column[0]]);
            // Format the running total
            var formatted = formatNum(total[index], column[2]);
            total[index] = formatted;
          }
        } else {
          total[index] = "";
        }
        return {
          column: column[0],
          value: row[column[0]],
          class: column[1],
          format: column[2]
        };
      });
      return x;
    })
    .enter()
    .append("td")
    .attr("class", function(d) {
      return d.class;
    })
    .text(function(d) {
      if (!!d.format) {
        return formatNum(d.value, d.format);
      } else {
        return d.value;
      }
    });

  // create totals row
  var totalRow = tfoot.append("tr");

  // fill totals cells

  totalRow
    .selectAll("td")
    .data(total)
    .enter()
    .append("td")
    .attr("class", function(value, index) {
      return index === 0 ? "col1" : "datacol";
    })
    .text(function(d) {
      return d;
    });

  return table;
}

function renderAllTables(config) {
  d3.csv(
    config.file + ".csv",
    function(d) {
      return d;
    },
    function(error, data) {
      createTable(data, config);
    }
  );
}

document.addEventListener("DOMContentLoaded", function() {
  Promise.all(
    [
      {
        file: "transport",
        data: [
          ["method", "col1", null],
          ["legs", "datacol", "count"],
          ["total cost", "datacol", "cost"],
          ["total miles", "datacol", "miles"],
          ["avg cost", "datacol", "avg cost"]
        ]
      },
      {
        file: "lodging",
        data: [
          ["method", "col1", null],
          ["nights", "datacol", "count"],
          ["total cost", "datacol", "cost"],
          ["avg cost", "datacol", "cost"]
        ]
      },
      {
        file: "transit",
        data: [
          ["method", "col1", null],
          ["count", "datacol", "count"],
          ["total cost", "datacol", "cost"],
          ["avg cost", "datacol", "cost"]
        ]
      },
      {
        file: "food",
        data: [
          ["method", "col1", null],
          ["count", "datacol", "count"],
          ["total cost", "datacol", "cost"],
          ["avg cost", "datacol", "cost"]
        ]
      },
      {
        file: "misc",
        data: [["category", "col1", null], ["cost", "datacol", "cost"]]
      }
    ].map(function(obj) {
      return renderAllTables(obj);
    })
  );
});
