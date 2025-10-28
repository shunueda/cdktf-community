// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesFirewallShapingpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#adom PackagesFirewallShapingpolicy#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#app_category PackagesFirewallShapingpolicy#app_category}
  */
  readonly appCategory?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#app_group PackagesFirewallShapingpolicy#app_group}
  */
  readonly appGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#application PackagesFirewallShapingpolicy#application}
  */
  readonly application?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#class_id PackagesFirewallShapingpolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#comment PackagesFirewallShapingpolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#cos PackagesFirewallShapingpolicy#cos}
  */
  readonly cos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#cos_mask PackagesFirewallShapingpolicy#cos_mask}
  */
  readonly cosMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#diffserv_forward PackagesFirewallShapingpolicy#diffserv_forward}
  */
  readonly diffservForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#diffserv_reverse PackagesFirewallShapingpolicy#diffserv_reverse}
  */
  readonly diffservReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#diffservcode_forward PackagesFirewallShapingpolicy#diffservcode_forward}
  */
  readonly diffservcodeForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#diffservcode_rev PackagesFirewallShapingpolicy#diffservcode_rev}
  */
  readonly diffservcodeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#dstaddr PackagesFirewallShapingpolicy#dstaddr}
  */
  readonly dstaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#dstaddr6 PackagesFirewallShapingpolicy#dstaddr6}
  */
  readonly dstaddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#dstintf PackagesFirewallShapingpolicy#dstintf}
  */
  readonly dstintf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#fosid PackagesFirewallShapingpolicy#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#groups PackagesFirewallShapingpolicy#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#id PackagesFirewallShapingpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#internet_service PackagesFirewallShapingpolicy#internet_service}
  */
  readonly internetService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#internet_service_custom PackagesFirewallShapingpolicy#internet_service_custom}
  */
  readonly internetServiceCustom?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#internet_service_custom_group PackagesFirewallShapingpolicy#internet_service_custom_group}
  */
  readonly internetServiceCustomGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#internet_service_group PackagesFirewallShapingpolicy#internet_service_group}
  */
  readonly internetServiceGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#internet_service_id PackagesFirewallShapingpolicy#internet_service_id}
  */
  readonly internetServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#internet_service_name PackagesFirewallShapingpolicy#internet_service_name}
  */
  readonly internetServiceName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#internet_service_src PackagesFirewallShapingpolicy#internet_service_src}
  */
  readonly internetServiceSrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#internet_service_src_custom PackagesFirewallShapingpolicy#internet_service_src_custom}
  */
  readonly internetServiceSrcCustom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#internet_service_src_custom_group PackagesFirewallShapingpolicy#internet_service_src_custom_group}
  */
  readonly internetServiceSrcCustomGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#internet_service_src_group PackagesFirewallShapingpolicy#internet_service_src_group}
  */
  readonly internetServiceSrcGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#internet_service_src_id PackagesFirewallShapingpolicy#internet_service_src_id}
  */
  readonly internetServiceSrcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#internet_service_src_name PackagesFirewallShapingpolicy#internet_service_src_name}
  */
  readonly internetServiceSrcName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#ip_version PackagesFirewallShapingpolicy#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#name PackagesFirewallShapingpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#per_ip_shaper PackagesFirewallShapingpolicy#per_ip_shaper}
  */
  readonly perIpShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#pkg PackagesFirewallShapingpolicy#pkg}
  */
  readonly pkg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#pkg_folder_path PackagesFirewallShapingpolicy#pkg_folder_path}
  */
  readonly pkgFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#schedule PackagesFirewallShapingpolicy#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#scopetype PackagesFirewallShapingpolicy#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#service PackagesFirewallShapingpolicy#service}
  */
  readonly service?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#srcaddr PackagesFirewallShapingpolicy#srcaddr}
  */
  readonly srcaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#srcaddr6 PackagesFirewallShapingpolicy#srcaddr6}
  */
  readonly srcaddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#srcintf PackagesFirewallShapingpolicy#srcintf}
  */
  readonly srcintf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#status PackagesFirewallShapingpolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#tos PackagesFirewallShapingpolicy#tos}
  */
  readonly tos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#tos_mask PackagesFirewallShapingpolicy#tos_mask}
  */
  readonly tosMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#tos_negate PackagesFirewallShapingpolicy#tos_negate}
  */
  readonly tosNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#traffic_shaper PackagesFirewallShapingpolicy#traffic_shaper}
  */
  readonly trafficShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#traffic_shaper_reverse PackagesFirewallShapingpolicy#traffic_shaper_reverse}
  */
  readonly trafficShaperReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#traffic_type PackagesFirewallShapingpolicy#traffic_type}
  */
  readonly trafficType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#url_category PackagesFirewallShapingpolicy#url_category}
  */
  readonly urlCategory?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#users PackagesFirewallShapingpolicy#users}
  */
  readonly users?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#uuid PackagesFirewallShapingpolicy#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy fortimanager_packages_firewall_shapingpolicy}
*/
export class PackagesFirewallShapingpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_firewall_shapingpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesFirewallShapingpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesFirewallShapingpolicy to import
  * @param importFromId The id of the existing PackagesFirewallShapingpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesFirewallShapingpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_firewall_shapingpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_shapingpolicy fortimanager_packages_firewall_shapingpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesFirewallShapingpolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PackagesFirewallShapingpolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_firewall_shapingpolicy',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._appCategory = config.appCategory;
    this._appGroup = config.appGroup;
    this._application = config.application;
    this._classId = config.classId;
    this._comment = config.comment;
    this._cos = config.cos;
    this._cosMask = config.cosMask;
    this._diffservForward = config.diffservForward;
    this._diffservReverse = config.diffservReverse;
    this._diffservcodeForward = config.diffservcodeForward;
    this._diffservcodeRev = config.diffservcodeRev;
    this._dstaddr = config.dstaddr;
    this._dstaddr6 = config.dstaddr6;
    this._dstintf = config.dstintf;
    this._fosid = config.fosid;
    this._groups = config.groups;
    this._id = config.id;
    this._internetService = config.internetService;
    this._internetServiceCustom = config.internetServiceCustom;
    this._internetServiceCustomGroup = config.internetServiceCustomGroup;
    this._internetServiceGroup = config.internetServiceGroup;
    this._internetServiceId = config.internetServiceId;
    this._internetServiceName = config.internetServiceName;
    this._internetServiceSrc = config.internetServiceSrc;
    this._internetServiceSrcCustom = config.internetServiceSrcCustom;
    this._internetServiceSrcCustomGroup = config.internetServiceSrcCustomGroup;
    this._internetServiceSrcGroup = config.internetServiceSrcGroup;
    this._internetServiceSrcId = config.internetServiceSrcId;
    this._internetServiceSrcName = config.internetServiceSrcName;
    this._ipVersion = config.ipVersion;
    this._name = config.name;
    this._perIpShaper = config.perIpShaper;
    this._pkg = config.pkg;
    this._pkgFolderPath = config.pkgFolderPath;
    this._schedule = config.schedule;
    this._scopetype = config.scopetype;
    this._service = config.service;
    this._srcaddr = config.srcaddr;
    this._srcaddr6 = config.srcaddr6;
    this._srcintf = config.srcintf;
    this._status = config.status;
    this._tos = config.tos;
    this._tosMask = config.tosMask;
    this._tosNegate = config.tosNegate;
    this._trafficShaper = config.trafficShaper;
    this._trafficShaperReverse = config.trafficShaperReverse;
    this._trafficType = config.trafficType;
    this._urlCategory = config.urlCategory;
    this._users = config.users;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // app_category - computed: true, optional: true, required: false
  private _appCategory?: string[]; 
  public get appCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('app_category'));
  }
  public set appCategory(value: string[]) {
    this._appCategory = value;
  }
  public resetAppCategory() {
    this._appCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCategoryInput() {
    return this._appCategory;
  }

  // app_group - computed: true, optional: true, required: false
  private _appGroup?: string[]; 
  public get appGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('app_group'));
  }
  public set appGroup(value: string[]) {
    this._appGroup = value;
  }
  public resetAppGroup() {
    this._appGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appGroupInput() {
    return this._appGroup;
  }

  // application - computed: true, optional: true, required: false
  private _application?: number[]; 
  public get application() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('application')));
  }
  public set application(value: number[]) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // cos - computed: true, optional: true, required: false
  private _cos?: string; 
  public get cos() {
    return this.getStringAttribute('cos');
  }
  public set cos(value: string) {
    this._cos = value;
  }
  public resetCos() {
    this._cos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosInput() {
    return this._cos;
  }

  // cos_mask - computed: true, optional: true, required: false
  private _cosMask?: string; 
  public get cosMask() {
    return this.getStringAttribute('cos_mask');
  }
  public set cosMask(value: string) {
    this._cosMask = value;
  }
  public resetCosMask() {
    this._cosMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosMaskInput() {
    return this._cosMask;
  }

  // diffserv_forward - computed: true, optional: true, required: false
  private _diffservForward?: string; 
  public get diffservForward() {
    return this.getStringAttribute('diffserv_forward');
  }
  public set diffservForward(value: string) {
    this._diffservForward = value;
  }
  public resetDiffservForward() {
    this._diffservForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservForwardInput() {
    return this._diffservForward;
  }

  // diffserv_reverse - computed: true, optional: true, required: false
  private _diffservReverse?: string; 
  public get diffservReverse() {
    return this.getStringAttribute('diffserv_reverse');
  }
  public set diffservReverse(value: string) {
    this._diffservReverse = value;
  }
  public resetDiffservReverse() {
    this._diffservReverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservReverseInput() {
    return this._diffservReverse;
  }

  // diffservcode_forward - computed: false, optional: true, required: false
  private _diffservcodeForward?: string; 
  public get diffservcodeForward() {
    return this.getStringAttribute('diffservcode_forward');
  }
  public set diffservcodeForward(value: string) {
    this._diffservcodeForward = value;
  }
  public resetDiffservcodeForward() {
    this._diffservcodeForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservcodeForwardInput() {
    return this._diffservcodeForward;
  }

  // diffservcode_rev - computed: false, optional: true, required: false
  private _diffservcodeRev?: string; 
  public get diffservcodeRev() {
    return this.getStringAttribute('diffservcode_rev');
  }
  public set diffservcodeRev(value: string) {
    this._diffservcodeRev = value;
  }
  public resetDiffservcodeRev() {
    this._diffservcodeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservcodeRevInput() {
    return this._diffservcodeRev;
  }

  // dstaddr - computed: true, optional: true, required: false
  private _dstaddr?: string[]; 
  public get dstaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('dstaddr'));
  }
  public set dstaddr(value: string[]) {
    this._dstaddr = value;
  }
  public resetDstaddr() {
    this._dstaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr;
  }

  // dstaddr6 - computed: false, optional: true, required: false
  private _dstaddr6?: string; 
  public get dstaddr6() {
    return this.getStringAttribute('dstaddr6');
  }
  public set dstaddr6(value: string) {
    this._dstaddr6 = value;
  }
  public resetDstaddr6() {
    this._dstaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddr6Input() {
    return this._dstaddr6;
  }

  // dstintf - computed: true, optional: true, required: false
  private _dstintf?: string[]; 
  public get dstintf() {
    return cdktf.Fn.tolist(this.getListAttribute('dstintf'));
  }
  public set dstintf(value: string[]) {
    this._dstintf = value;
  }
  public resetDstintf() {
    this._dstintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstintfInput() {
    return this._dstintf;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // groups - computed: true, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // internet_service - computed: true, optional: true, required: false
  private _internetService?: string; 
  public get internetService() {
    return this.getStringAttribute('internet_service');
  }
  public set internetService(value: string) {
    this._internetService = value;
  }
  public resetInternetService() {
    this._internetService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceInput() {
    return this._internetService;
  }

  // internet_service_custom - computed: true, optional: true, required: false
  private _internetServiceCustom?: string[]; 
  public get internetServiceCustom() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_custom'));
  }
  public set internetServiceCustom(value: string[]) {
    this._internetServiceCustom = value;
  }
  public resetInternetServiceCustom() {
    this._internetServiceCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomInput() {
    return this._internetServiceCustom;
  }

  // internet_service_custom_group - computed: true, optional: true, required: false
  private _internetServiceCustomGroup?: string[]; 
  public get internetServiceCustomGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_custom_group'));
  }
  public set internetServiceCustomGroup(value: string[]) {
    this._internetServiceCustomGroup = value;
  }
  public resetInternetServiceCustomGroup() {
    this._internetServiceCustomGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomGroupInput() {
    return this._internetServiceCustomGroup;
  }

  // internet_service_group - computed: true, optional: true, required: false
  private _internetServiceGroup?: string[]; 
  public get internetServiceGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_group'));
  }
  public set internetServiceGroup(value: string[]) {
    this._internetServiceGroup = value;
  }
  public resetInternetServiceGroup() {
    this._internetServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceGroupInput() {
    return this._internetServiceGroup;
  }

  // internet_service_id - computed: false, optional: true, required: false
  private _internetServiceId?: string; 
  public get internetServiceId() {
    return this.getStringAttribute('internet_service_id');
  }
  public set internetServiceId(value: string) {
    this._internetServiceId = value;
  }
  public resetInternetServiceId() {
    this._internetServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceIdInput() {
    return this._internetServiceId;
  }

  // internet_service_name - computed: true, optional: true, required: false
  private _internetServiceName?: string[]; 
  public get internetServiceName() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_name'));
  }
  public set internetServiceName(value: string[]) {
    this._internetServiceName = value;
  }
  public resetInternetServiceName() {
    this._internetServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceNameInput() {
    return this._internetServiceName;
  }

  // internet_service_src - computed: true, optional: true, required: false
  private _internetServiceSrc?: string; 
  public get internetServiceSrc() {
    return this.getStringAttribute('internet_service_src');
  }
  public set internetServiceSrc(value: string) {
    this._internetServiceSrc = value;
  }
  public resetInternetServiceSrc() {
    this._internetServiceSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcInput() {
    return this._internetServiceSrc;
  }

  // internet_service_src_custom - computed: false, optional: true, required: false
  private _internetServiceSrcCustom?: string; 
  public get internetServiceSrcCustom() {
    return this.getStringAttribute('internet_service_src_custom');
  }
  public set internetServiceSrcCustom(value: string) {
    this._internetServiceSrcCustom = value;
  }
  public resetInternetServiceSrcCustom() {
    this._internetServiceSrcCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcCustomInput() {
    return this._internetServiceSrcCustom;
  }

  // internet_service_src_custom_group - computed: false, optional: true, required: false
  private _internetServiceSrcCustomGroup?: string; 
  public get internetServiceSrcCustomGroup() {
    return this.getStringAttribute('internet_service_src_custom_group');
  }
  public set internetServiceSrcCustomGroup(value: string) {
    this._internetServiceSrcCustomGroup = value;
  }
  public resetInternetServiceSrcCustomGroup() {
    this._internetServiceSrcCustomGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcCustomGroupInput() {
    return this._internetServiceSrcCustomGroup;
  }

  // internet_service_src_group - computed: false, optional: true, required: false
  private _internetServiceSrcGroup?: string; 
  public get internetServiceSrcGroup() {
    return this.getStringAttribute('internet_service_src_group');
  }
  public set internetServiceSrcGroup(value: string) {
    this._internetServiceSrcGroup = value;
  }
  public resetInternetServiceSrcGroup() {
    this._internetServiceSrcGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcGroupInput() {
    return this._internetServiceSrcGroup;
  }

  // internet_service_src_id - computed: false, optional: true, required: false
  private _internetServiceSrcId?: string; 
  public get internetServiceSrcId() {
    return this.getStringAttribute('internet_service_src_id');
  }
  public set internetServiceSrcId(value: string) {
    this._internetServiceSrcId = value;
  }
  public resetInternetServiceSrcId() {
    this._internetServiceSrcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcIdInput() {
    return this._internetServiceSrcId;
  }

  // internet_service_src_name - computed: true, optional: true, required: false
  private _internetServiceSrcName?: string[]; 
  public get internetServiceSrcName() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_src_name'));
  }
  public set internetServiceSrcName(value: string[]) {
    this._internetServiceSrcName = value;
  }
  public resetInternetServiceSrcName() {
    this._internetServiceSrcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcNameInput() {
    return this._internetServiceSrcName;
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // per_ip_shaper - computed: false, optional: true, required: false
  private _perIpShaper?: string; 
  public get perIpShaper() {
    return this.getStringAttribute('per_ip_shaper');
  }
  public set perIpShaper(value: string) {
    this._perIpShaper = value;
  }
  public resetPerIpShaper() {
    this._perIpShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perIpShaperInput() {
    return this._perIpShaper;
  }

  // pkg - computed: false, optional: false, required: true
  private _pkg?: string; 
  public get pkg() {
    return this.getStringAttribute('pkg');
  }
  public set pkg(value: string) {
    this._pkg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgInput() {
    return this._pkg;
  }

  // pkg_folder_path - computed: false, optional: true, required: false
  private _pkgFolderPath?: string; 
  public get pkgFolderPath() {
    return this.getStringAttribute('pkg_folder_path');
  }
  public set pkgFolderPath(value: string) {
    this._pkgFolderPath = value;
  }
  public resetPkgFolderPath() {
    this._pkgFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgFolderPathInput() {
    return this._pkgFolderPath;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string[]; 
  public get service() {
    return cdktf.Fn.tolist(this.getListAttribute('service'));
  }
  public set service(value: string[]) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // srcaddr - computed: true, optional: true, required: false
  private _srcaddr?: string[]; 
  public get srcaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('srcaddr'));
  }
  public set srcaddr(value: string[]) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
  }

  // srcaddr6 - computed: false, optional: true, required: false
  private _srcaddr6?: string; 
  public get srcaddr6() {
    return this.getStringAttribute('srcaddr6');
  }
  public set srcaddr6(value: string) {
    this._srcaddr6 = value;
  }
  public resetSrcaddr6() {
    this._srcaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddr6Input() {
    return this._srcaddr6;
  }

  // srcintf - computed: true, optional: true, required: false
  private _srcintf?: string[]; 
  public get srcintf() {
    return cdktf.Fn.tolist(this.getListAttribute('srcintf'));
  }
  public set srcintf(value: string[]) {
    this._srcintf = value;
  }
  public resetSrcintf() {
    this._srcintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfInput() {
    return this._srcintf;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tos - computed: true, optional: true, required: false
  private _tos?: string; 
  public get tos() {
    return this.getStringAttribute('tos');
  }
  public set tos(value: string) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // tos_mask - computed: true, optional: true, required: false
  private _tosMask?: string; 
  public get tosMask() {
    return this.getStringAttribute('tos_mask');
  }
  public set tosMask(value: string) {
    this._tosMask = value;
  }
  public resetTosMask() {
    this._tosMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosMaskInput() {
    return this._tosMask;
  }

  // tos_negate - computed: true, optional: true, required: false
  private _tosNegate?: string; 
  public get tosNegate() {
    return this.getStringAttribute('tos_negate');
  }
  public set tosNegate(value: string) {
    this._tosNegate = value;
  }
  public resetTosNegate() {
    this._tosNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosNegateInput() {
    return this._tosNegate;
  }

  // traffic_shaper - computed: false, optional: true, required: false
  private _trafficShaper?: string; 
  public get trafficShaper() {
    return this.getStringAttribute('traffic_shaper');
  }
  public set trafficShaper(value: string) {
    this._trafficShaper = value;
  }
  public resetTrafficShaper() {
    this._trafficShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShaperInput() {
    return this._trafficShaper;
  }

  // traffic_shaper_reverse - computed: false, optional: true, required: false
  private _trafficShaperReverse?: string; 
  public get trafficShaperReverse() {
    return this.getStringAttribute('traffic_shaper_reverse');
  }
  public set trafficShaperReverse(value: string) {
    this._trafficShaperReverse = value;
  }
  public resetTrafficShaperReverse() {
    this._trafficShaperReverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShaperReverseInput() {
    return this._trafficShaperReverse;
  }

  // traffic_type - computed: true, optional: true, required: false
  private _trafficType?: string; 
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  public resetTrafficType() {
    this._trafficType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType;
  }

  // url_category - computed: true, optional: true, required: false
  private _urlCategory?: string[]; 
  public get urlCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('url_category'));
  }
  public set urlCategory(value: string[]) {
    this._urlCategory = value;
  }
  public resetUrlCategory() {
    this._urlCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCategoryInput() {
    return this._urlCategory;
  }

  // users - computed: true, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      app_category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appCategory),
      app_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appGroup),
      application: cdktf.listMapper(cdktf.numberToTerraform, false)(this._application),
      class_id: cdktf.stringToTerraform(this._classId),
      comment: cdktf.stringToTerraform(this._comment),
      cos: cdktf.stringToTerraform(this._cos),
      cos_mask: cdktf.stringToTerraform(this._cosMask),
      diffserv_forward: cdktf.stringToTerraform(this._diffservForward),
      diffserv_reverse: cdktf.stringToTerraform(this._diffservReverse),
      diffservcode_forward: cdktf.stringToTerraform(this._diffservcodeForward),
      diffservcode_rev: cdktf.stringToTerraform(this._diffservcodeRev),
      dstaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr),
      dstaddr6: cdktf.stringToTerraform(this._dstaddr6),
      dstintf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstintf),
      fosid: cdktf.numberToTerraform(this._fosid),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      internet_service: cdktf.stringToTerraform(this._internetService),
      internet_service_custom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceCustom),
      internet_service_custom_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceCustomGroup),
      internet_service_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceGroup),
      internet_service_id: cdktf.stringToTerraform(this._internetServiceId),
      internet_service_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceName),
      internet_service_src: cdktf.stringToTerraform(this._internetServiceSrc),
      internet_service_src_custom: cdktf.stringToTerraform(this._internetServiceSrcCustom),
      internet_service_src_custom_group: cdktf.stringToTerraform(this._internetServiceSrcCustomGroup),
      internet_service_src_group: cdktf.stringToTerraform(this._internetServiceSrcGroup),
      internet_service_src_id: cdktf.stringToTerraform(this._internetServiceSrcId),
      internet_service_src_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceSrcName),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      name: cdktf.stringToTerraform(this._name),
      per_ip_shaper: cdktf.stringToTerraform(this._perIpShaper),
      pkg: cdktf.stringToTerraform(this._pkg),
      pkg_folder_path: cdktf.stringToTerraform(this._pkgFolderPath),
      schedule: cdktf.stringToTerraform(this._schedule),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      srcaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcaddr),
      srcaddr6: cdktf.stringToTerraform(this._srcaddr6),
      srcintf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcintf),
      status: cdktf.stringToTerraform(this._status),
      tos: cdktf.stringToTerraform(this._tos),
      tos_mask: cdktf.stringToTerraform(this._tosMask),
      tos_negate: cdktf.stringToTerraform(this._tosNegate),
      traffic_shaper: cdktf.stringToTerraform(this._trafficShaper),
      traffic_shaper_reverse: cdktf.stringToTerraform(this._trafficShaperReverse),
      traffic_type: cdktf.stringToTerraform(this._trafficType),
      url_category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urlCategory),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appCategory),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      app_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      application: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._application),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos: {
        value: cdktf.stringToHclTerraform(this._cos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_mask: {
        value: cdktf.stringToHclTerraform(this._cosMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffserv_forward: {
        value: cdktf.stringToHclTerraform(this._diffservForward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffserv_reverse: {
        value: cdktf.stringToHclTerraform(this._diffservReverse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffservcode_forward: {
        value: cdktf.stringToHclTerraform(this._diffservcodeForward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffservcode_rev: {
        value: cdktf.stringToHclTerraform(this._diffservcodeRev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dstaddr6: {
        value: cdktf.stringToHclTerraform(this._dstaddr6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstintf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstintf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service: {
        value: cdktf.stringToHclTerraform(this._internetService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_custom: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceCustom),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_custom_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceCustomGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_id: {
        value: cdktf.stringToHclTerraform(this._internetServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_src: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_src_custom: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrcCustom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_src_custom_group: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrcCustomGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_src_group: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrcGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_src_id: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_src_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceSrcName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_ip_shaper: {
        value: cdktf.stringToHclTerraform(this._perIpShaper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkg: {
        value: cdktf.stringToHclTerraform(this._pkg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkg_folder_path: {
        value: cdktf.stringToHclTerraform(this._pkgFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._service),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      srcaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      srcaddr6: {
        value: cdktf.stringToHclTerraform(this._srcaddr6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcintf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcintf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos: {
        value: cdktf.stringToHclTerraform(this._tos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos_mask: {
        value: cdktf.stringToHclTerraform(this._tosMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos_negate: {
        value: cdktf.stringToHclTerraform(this._tosNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_shaper: {
        value: cdktf.stringToHclTerraform(this._trafficShaper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_shaper_reverse: {
        value: cdktf.stringToHclTerraform(this._trafficShaperReverse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_type: {
        value: cdktf.stringToHclTerraform(this._trafficType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urlCategory),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
