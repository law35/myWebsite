"""portfolio2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include, patterns
from django.contrib import admin
from django.views.generic import (TemplateView, RedirectView,)

urlpatterns = patterns('',
	url(r'^$', 'resources.views.index', name='home'),
	url(r'^education/$', TemplateView.as_view(template_name='education.html'), name='education'),
	url(r'^surgical/$', TemplateView.as_view(template_name='surgical.html'), name='surgical'),
	url(r'^genskills/$', TemplateView.as_view(template_name='genskills.html'), name='genskills'),
	url(r'^medicalexp/$', TemplateView.as_view(template_name='medicalexp.html'), name='medicalexp'),
	url(r'^militaryexp/$', TemplateView.as_view(template_name='militaryexp.html'), name='militaryexp'),
	url(r'^programmingexp/$', TemplateView.as_view(template_name='programmingexp.html'), name='programmingexp'),
	url(r'^contact/$', TemplateView.as_view(template_name='contact.html'), name='contact'),
    url(r'^admin/', admin.site.urls),
)
