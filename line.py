# import numpy for math symbols and matplotlib for plotting data
import numpy as np
import matplotlib.pyplot as plt

# define range for theta [0, 8pi] 
theta = np.linspace(0, 8*np.pi, 1000)

# define a radius for the cycloid-drawing circle
r = 50

# define parametric functions x and y
x = r * (theta - np.sin(theta))
y = r * (1 - np.cos(theta))

# define title
plt.title('Parametric Function for Cycloid Curve')

# define range for y-axis [0, 200]
bottom, top = plt.ylim()
plt.ylim(top=200)

# define range for x-axis [0, 1300]
left, right = plt.xlim()
plt.xlim(right=1300)

# plot the cycloid path in black
plt.plot(x, y, color='black')

# show graph
plt.show()
