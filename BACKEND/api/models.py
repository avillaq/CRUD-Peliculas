from django.db import models

# Create your models here.
class Movie(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.URLField(max_length=200)
    rating = models.IntegerField()
    genres = models.ManyToManyField("Genre")
    inTheaters = models.BooleanField()

    def __str__(self):
        return self.name
    
class Genre(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name