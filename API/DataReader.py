#import numpy as np
from astropy.io import ascii
#import matplotlib.pyplot as plt

class Tablify:
    def __init__(self, file):
        self.file = file

    def read(self):
        data = ascii.read(self.file)
        print(data)

    def get_col_names(self):
        data = ascii.read(self.file)
        names = []
        for name in data.columns:
            names.append(name)
        print(names)

    def get_column_by_num(self, num):
        self.num = num
        data = ascii.read(self.file)
        names = []
        for name in data.columns:
            names.append(name)
        print(names[num])
        return(data.columns[num])


planet_file = Tablify("planets.csv")

planet_file.read()
planet_file.get_col_names()
planet_file.get_column_by_num(0)
