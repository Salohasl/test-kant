(()=>{"use strict";var e=document.querySelector(".menuBtn"),t=document.querySelector("nav");null!==e&&null!==t&&(e.addEventListener("click",(function(){e.classList.toggle("active"),t.classList.toggle("popUp")})),document.addEventListener("click",(function(n){(null==t?void 0:t.contains(n.target))||e.contains(n.target)||(null==t||t.classList.remove("popUp"),null==e||e.classList.remove("active"))})));var n=document.querySelectorAll(".animation"),c=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("anim"),t.unobserve(e.target))}))}),{rootMargin:"0px",threshold:.5});n.forEach((function(e){c.observe(e)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2ZWxvcGVyLjJkZTc5NTRmOGJkZmRlMmNhYTVkLmpzIiwibWFwcGluZ3MiOiJtQkFFQSxJQUFNQSxFQUE4QkMsU0FBU0MsY0FBYyxZQUNyREMsRUFBMkJGLFNBQVNDLGNBQWMsT0FFekMsT0FBWEYsR0FBMkIsT0FBUkcsSUFDbkJILEVBQVFJLGlCQUFpQixTQUFTLFdBQzlCSixFQUFRSyxVQUFVQyxPQUFPLFVBQ3pCSCxFQUFLRSxVQUFVQyxPQUFPLFFBQzFCLElBRUFMLFNBQVNHLGlCQUFpQixTQUFTLFNBQVNHLElBQ25DSixhQUFJLEVBQUpBLEVBQU1LLFNBQVNELEVBQU1FLFVBQW1CVCxFQUFRUSxTQUFTRCxFQUFNRSxVQUNoRU4sU0FBQUEsRUFBTUUsVUFBVUssT0FBTyxTQUN2QlYsU0FBQUEsRUFBU0ssVUFBVUssT0FBTyxVQUVsQyxLQUlKLElBQU1DLEVBQWtDVixTQUFTVyxpQkFBaUIsY0FZNURDLEVBQVcsSUFBSUMsc0JBVkksU0FBQ0MsRUFBc0NGLEdBQzVERSxFQUFRQyxTQUFRLFNBQUFDLEdBQ1JBLEVBQU1DLGlCQUNORCxFQUFNUixPQUFPSixVQUFVYyxJQUFJLFFBQzNCTixFQUFTTyxVQUFVSCxFQUFNUixRQUVqQyxHQUNKLEdBRzRELENBQ3hEWSxXQUFZLE1BQ1pDLFVBQVcsS0FJZlgsRUFBV0ssU0FBUSxTQUFDTyxHQUNoQlYsRUFBU1csUUFBUUQsRUFDckIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QvLi9zcmMvZGV2ZWxvcGVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuXHJcbmNvbnN0IG1lbnVCdG46IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51QnRuJyk7XHJcbmNvbnN0IG1lbnU6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xyXG5cclxuaWYgKG1lbnVCdG4hPT0gbnVsbCAmJiBtZW51IT09IG51bGwpIHtcclxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ3BvcFVwJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCFtZW51Py5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSkgJiYhbWVudUJ0bi5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSkpIHtcclxuICAgICAgICAgICAgbWVudT8uY2xhc3NMaXN0LnJlbW92ZSgncG9wVXAnKTtcclxuICAgICAgICAgICAgbWVudUJ0bj8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBhZHZhbnRhZ2VzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW1hdGlvbicpO1xyXG5cclxuY29uc3Qgb2JzZXJ2ZXJDYWxsYmFjayA9IChlbnRyaWVzOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10sIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlcik6IHZvaWQgPT4ge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FuaW0nKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcclxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjaywge1xyXG4gICAgcm9vdE1hcmdpbjogJzBweCcsXHJcbiAgICB0aHJlc2hvbGQ6IDAuNVxyXG59KTtcclxuXHJcbi8vIE9ic2VydmUgZWFjaCBhZHZhbnRhZ2UgZWxlbWVudFxyXG5hZHZhbnRhZ2VzLmZvckVhY2goKGFkdmFudGFnKSA9PiB7XHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKGFkdmFudGFnKTtcclxufSk7Il0sIm5hbWVzIjpbIm1lbnVCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImV2ZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJyZW1vdmUiLCJhZHZhbnRhZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJhZGQiLCJ1bm9ic2VydmUiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiYWR2YW50YWciLCJvYnNlcnZlIl0sInNvdXJjZVJvb3QiOiIifQ==