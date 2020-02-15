from django.db import models

# Create your models here.

class User(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.TextField()
    password = models.TextField()
    kind = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        """A string representation of the model."""
        return self.id