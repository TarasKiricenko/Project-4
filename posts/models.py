from django.db import models

# ! creating a model 

class Post(models.Model):
    title = models.CharField(max_length=50, default=None)
    image = models.URLField(max_length=500, default=None, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    text = models.TextField(max_length=1000, default=None)

    def __str__(self):
        return f"{self.title}"