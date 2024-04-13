function getRandomDateBetween(startDateStr, endDateStr) {
    // Convert start and end date strings to Date objects
    var startDate = new Date(startDateStr);
    var endDate = new Date(endDateStr);

    // Convert Date objects to seconds
    var startTimestamp = Math.floor(startDate.getTime() / 1000);
    var endTimestamp = Math.floor(endDate.getTime() / 1000);

    // Generate random timestamp between start and end timestamps
    var randomTimestamp = Math.floor(startTimestamp + Math.random() * (endTimestamp - startTimestamp));

    return randomTimestamp;
}

// Example usage:





let randomGenratorLogic = () => {
    let orders = [];
    if (Math.random() < 0.5 ? true : false) {
        let randomOrder = (Math.random() * 20); // true for ascending order
        for (let i = 0.5; i < randomOrder; i++) {
            let order_id = Math.ceil(Math.random() * 10000);
            //   
            // Current timestamp in milliseconds
            // var currentTime = Date.now();

            // Seven days in milliseconds
            var startDateStr = '2024-01-01'; // Start date
            var endDateStr = '2024-12-31'; // End date
            var randomTimestampInSeconds = getRandomDateBetween(startDateStr, endDateStr);


            let paid_with = Math.random() > 0.5 ? 'Wallet' : 'Cash';
            let total_paid = (Math.random() * (20. - 10.)) + 10.;

            let order = {
                order_id: order_id,
                arrives_at_utc: randomTimestampInSeconds,
                paid_with: paid_with,
                total_paid: Number(total_paid.toFixed(2))

            };

            orders.push(order);
        }

        return { orders: orders };
    } else {

    };
}

let testRouteController = (req, res) => {
    let data = randomGenratorLogic();
    if (data) {
        res.send(data);

    } else {
        res.status(501).send();

    }
};

module.exports = { testRouteController };
