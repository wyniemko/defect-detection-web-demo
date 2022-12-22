# Building a computer vision defect detection system for conveyance at Amazon

## Amazon has reached out to my team to identify a solution for downtime in the production schedule that has accumulated due to belt failure. Amazon has yet to scale to passive, predictive monitoring systems for conveyance, sorting, and packaging machines. 

These centers rely on complex conveyance systems to transport and sort packages, with conveyor belts being a significant component. With +75 types of belts, the team is looking for a standardized product that can be bolted along the conveyor belt to relay critical performance data on belt performance and life. However, due to the high volume of parcels and constant operation of the centers, these conveyance systems can become overworked and prone to failure.

I built a machine learning model in OpenCV, a popular computer vision library, and TensorFlow, a popular machine learning library. I used these tools to analyze and interpret the data collected by the camera system, looking for patterns and anomalies that could indicate potential belt failure. Next, I wrote the code to control the camera system using JavaScript, allowing it to function in real-time and alert operators if any defects were detected. This code also incorporated cloud-based PLC systems to track the entire length of the belt and optimize production schedules. Finally, I worked with Amazon to launch the monitoring system in several fulfillment centers. The system has proven to be a valuable asset, helping prevent unscheduled downtime and improving the centers’ efficiency.

## Deliverables

1. Develop a machine learning model that can accurately detect defects in conveyor belts, including material defects, tracking variances, and splice defects.

2. Aggregate and classify the defects detected by the machine learning model.

3. Implement the machine learning model and defect detection system in an Amazon fulfillment center for testing.

4. Develop a user interface for the system, including real-time monitoring and alerting capabilities.

5. Integrate the system with the existing conveyor belt systems in the fulfillment center.

6. Conduct testing of the system in the fulfillment center to evaluate its performance and make any necessary adjustments.

7. Provide training to technicians on how to use and maintain the system.

8. Create documentation for the system, including user manuals and technical specifications.

9. Provide ongoing support and maintenance for the system as needed.

10. Design and build a fixture to house the camera, computer, lighting, and rub plate for the defect detection system.

11. Test the fixture to ensure that it provides the necessary support and stability for the defect detection system.
