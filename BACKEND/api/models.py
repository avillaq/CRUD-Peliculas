from django.db import models

# Create your models here.
class Movie(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.URLField(max_length=200)
    rating = models.IntegerField()
    genre = models.CharField(max_length=50)
    inTheaters = models.BooleanField()

    def __str__(self):
        return self.name