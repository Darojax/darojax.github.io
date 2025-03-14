// CONFIGURATION FOR MAINTENANCE MESSAGE

// Options:
// 1 = SERVER UNREACHABLE
// 2 = SCHEDULED MAINTENANCE
// 3 = UNSCHEDULED MAINTENANCE
// 4 = UNSCHEDULED DOWNTIME
const maintenanceScenarioNumber = 1;

// Downtime start time in UTC: "YYYY-MM-DD HH:MM"
const manualDowntimeStartString = "2025-03-14 17:17";

// Estimated downtime
const estimatedDowntime = "~30-60 minutes";

// Reason for maintenance
const maintenanceReason = "Dust removal";

// Color setting for reason text
const reasonTextColor = "#f06";

// === DO NOT EDIT BELOW THIS LINE ===

// Mapping numbers to scenario names
const maintenanceScenarioMap = {
    1: "SERVER_UNREACHABLE",
    2: "SCHEDULED_MAINTENANCE",
    3: "UNSCHEDULED_MAINTENANCE",
    4: "UNSCHEDULED_DOWNTIME"
};

// Get the selected scenario name
const maintenanceScenario = maintenanceScenarioMap[maintenanceScenarioNumber] || "SERVER_UNREACHABLE"; // Default to SERVER_UNREACHABLE if invalid number

// Function to convert "YYYY-MM-DD HH:MM" to Date object (UTC)
function parseUtcDateTime(dateTimeString) {
    const [datePart, timePart] = dateTimeString.split(" ");
    const [year, month, day] = datePart.split("-").map(Number);
    const [hour, minute] = timePart.split(":").map(Number);

    return new Date(Date.UTC(year, month - 1, day, hour, minute)); // Month is zero-based
}

// Convert the string to a Date object
const manualDowntimeStart = parseUtcDateTime(manualDowntimeStartString);
