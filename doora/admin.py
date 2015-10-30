from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin

# Register your models here.

# Apply summernote to all TextField in model.
from doora.models import Rent


class SomeModelAdmin(SummernoteModelAdmin):  # instead of ModelAdmin
    admin.site.register(Rent)