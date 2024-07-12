from .models import Movie, Genre
from .serializers import MovieReadSerializer, MovieSerializer, GenreSerializer
from rest_framework import generics

class MovieListCreate(generics.ListCreateAPIView):
    queryset = Movie.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return MovieReadSerializer
        return MovieSerializer

class MovieRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Movie.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return MovieReadSerializer
        return MovieSerializer

class GenreListCreate(generics.ListCreateAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer