from django.db import models

class Continent(models.Model):
    name = models.CharField(max_length=150)
    been = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name}"

class Country(models.Model):
    name = models.CharField(max_length=150)
    been = models.BooleanField(default=False)
    continent = models.ForeignKey(Continent, on_delete=models.CASCADE, related_name="countries")

    def __str__(self):
        return f"{self.name}"

class Capital(models.Model):
    name = models.CharField(max_length=150)
    been = models.BooleanField(default=False)
    country = models.ForeignKey(Country, on_delete=models.CASCADE, related_name="capitals")

    def __str__(self):
        return f"{self.name}"
