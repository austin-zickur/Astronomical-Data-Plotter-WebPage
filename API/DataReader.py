import numpy as np
from astropy.io import ascii
import matplotlib.pyplot as plt
import os

UPLOAD_FOLDER = "/tmp/uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

class FileSof:
     saved_files = []

     def __init__(self, uploaded_files):
          self.uploaded_files = uploaded_files

     def upload(self):
        for file in self.uploaded_files:
            file_path = os.path.join(UPLOAD_FOLDER, file.filename)
            file.save(file_path)
            saved_files.append(file.filename)
        return saved_files
        

class Tablify:
    def __init__(self, file):
        self.file = file
        return ascii.read(file)



"""class DataWrangle:
    def __init__(self, lst):
        self.lst = lst

    def displayList(self):
        print(self.lst)

    def tablify(self):
        arr = np.array(self.lst)
        """

    
thelis = DataWrangle([1,2])
thelis.displayList()
