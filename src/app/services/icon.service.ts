import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export enum Icons {
  Id = 'id',
  DigitalLogo = 'digital-logo',
  Bar = 'bar',
  Logo = 'logo',
  Search = 'search',
  Gallery = 'gallery',
  Eye = 'eye',
  FullScreen = 'full-screen',
  Widget = 'widget',
  User = 'user',
  UserTick = 'user-tick',
  AbbosAvatar = 'abbos-avatar',
  LogOut = 'log-out',
  Uzbekistan = 'uzbekistan',
  ArrowDown = 'arrow-down',
  Settings = 'settings',
  ArrowDownBtn = 'arrow-down-btn',
  MainPage = 'main-page',
  Calendar = 'calendar',
  MyDocuments = 'my-documents',
  SentDocuments = 'sent-documents',
  ReceivedDocuments = 'received-documents',
  Deal = 'deal',
  Resolution = 'resolution',
  Sign = 'sign',
  Sector = 'sector',
  SectionDocuments = 'section-documents',
  Editor = 'editor',
  ArrowLinkDown = 'arrow-link-down',
  Statistics = 'statistics',
  Reports = 'reports',
  DocumentsInfoShape = 'documents-info-shape',
  // Documents info icons
  PresidentDocs = 'president-docs',
  MinisterDocs = 'minister-docs',
  GovernComission = 'govern-comission',
  InternalDocs = 'internal-docs',
  Audit = 'audit',
  // Received mission icons
  ReceivedMSign = 'received-m-sign',
  ReceivedMResolution = 'received-m-resolution',
  ReceivedMDeal = 'received-m-deal',
  CreateControl = 'create-control',

  // Sent missions
  SentIconShape = 'sent-icon-shape',
  ArrowTop = 'arrow-top',

  // Rule news
  ListIcon = 'list-icon',
  ArrowTopBlack = 'arrow-top-black',

  // Weather
  Weather = 'weather',

  //Birthdays
  BirthdayCake = 'birthday-cake',

  //Meeting
  MeetLogo = 'meet-logo',
  MeetIconText = 'meet-icon-text',
  DigitalOfLogo = 'digital-of-logo',
  PlusIcon = 'plus-icon',
  VideoCamera = 'video-camera',

  // Lex uz
  LexUzLogo = 'lex-uz-logo',
  SearchLexUz = 'search-lex-uz',

  // Notes
  TextIcon = 'text-icon',
  AddImg = 'add-img',
  BarMenu = 'bar-menu',
  Delete = 'delete',

  // Right icons
  Notification = 'notification',
  CalendarRight = 'calendar-right',
  ContactInfo = 'contact-info',
  RightList = 'right-list',
  QuestionMark = 'question-mark',
  CommentIcon = 'comment-icon',
  YearIcon = 'year-icon',
  Chat = 'chat',

  // Create document icons
  DocumentClose = 'document-close',
  DocumentSetting = 'document-setting',
  DocumentArrowDown = 'document-arrow-down',
  DocumentSearch = 'document-search',
  CreateCategory = 'create-category',
  CategorySetting = 'category-setting',
  CloseTag = 'close-tag',
  TagPlus = 'tag-plus',
  DateOpen = 'date-open',
  TextareaIcon = 'textarea-icon',
  SelectTick = 'select-tick',
  CreateSelectCategory = 'create-select-category',
  Polygon = 'polygon',
  SentGmail = 'sent-gmail',
  Fire = 'fire',
  LookToFile = 'look-to-file',

  // Create documents footer
  RegisterQrCode = 'register-qr-code',
  MainFile = 'main-file',
  Applications = 'apps',
  RelatableDocuments = 'relatable-documents',
  English = 'english',
  UnitedKingdom = 'united-kingdom',
  Russian = 'russian',

  // Create document, right icons
  CrDocNotification = 'cr-doc-notification',
  CrDocCalendar = 'cr-doc-calendar',
  CrDocContact = 'cr-doc-contact',
  CrDocList = 'cr-doc-list',
  CrDocQuestion = 'cr-doc-question',
  CrDocMessage = 'cr-doc-message',
  CrDocYear = 'cr-doc-year',
}

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  public registerIcons(): void {
    this.loadIcons(Object.values(Icons), 'icons');
  }

  private loadIcons(iconKeys: string[], iconUrl: string): void {
    iconKeys.forEach((key) => {
      this.matIconRegistry.addSvgIcon(
        key,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `${iconUrl}/${key}.svg`
        )
      );
    });
  }
}
