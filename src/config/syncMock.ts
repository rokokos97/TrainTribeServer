const Sport = require("../models/MongoDB/sport.model.mongoDB");
const { sportsMock } = require("../mocks/sports.mock");

const syncMock = async (): Promise<void> => {
  try {
    console.log("Checking if mock data...");
    const existingSports = await Sport.find();

    if (existingSports.length === sportsMock.length) {
      console.log("Data is match, no need to insert mock data.");
      return;
    }
    console.log("Data isn't match, inserting mock data...");
    await Sport.deleteMany();
    console.log("Deleted all data.");
    await Sport.insertMany(sportsMock);
    console.log("Mock data inserted.");
  } catch (error) {
    console.error("Error inserting mock data", error);
    process.exit(1);
  }
};

module.exports = syncMock;
