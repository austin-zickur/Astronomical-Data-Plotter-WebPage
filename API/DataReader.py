#import numpy as np
#from astropy import ascii
#import matplotlib.pyplot as plt

class DataWrangle:
    def __init__(self, lst):
        self.lst = lst

    def displayList(self):
        print(self.lst)
    
thelis = DataWrangle([1,2])
thelis.displayList()
