# instructions
Plot all the positions on the map, while keeping the app performant.

You may consider using <canvas> to stay performant, or use other methods.

Add a filtering menu to filter by the following:

positionable_id - only show points for a specific positionable_id

start_date && end_date - only show points with a created_at between these two dates.

Add a Toggles section to turn on/off the following:

Routes: connect-the-dots for each positionable_id and draw a line visualizing the route that they traveled, ordered by time.

Write tests for expected functionality

BONUS: Add a toggle to switch on/off a Heatmap mode, where areas with lots of plotted points are "hotter".

# To Run

npm start

(loads in http://localhost:8000/app/index.html)

grunt watch

npm run protractor
