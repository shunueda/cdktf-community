// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal_bookmarkgroup_bookmarks_formdata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectVpnSslWebPortalBookmarkgroupBookmarksFormdataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal_bookmarkgroup_bookmarks_formdata#adom ObjectVpnSslWebPortalBookmarkgroupBookmarksFormdata#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal_bookmarkgroup_bookmarks_formdata#bookmark_group ObjectVpnSslWebPortalBookmarkgroupBookmarksFormdata#bookmark_group}
  */
  readonly bookmarkGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal_bookmarkgroup_bookmarks_formdata#bookmarks ObjectVpnSslWebPortalBookmarkgroupBookmarksFormdata#bookmarks}
  */
  readonly bookmarks: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal_bookmarkgroup_bookmarks_formdata#id ObjectVpnSslWebPortalBookmarkgroupBookmarksFormdata#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal_bookmarkgroup_bookmarks_formdata#name ObjectVpnSslWebPortalBookmarkgroupBookmarksFormdata#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal_bookmarkgroup_bookmarks_formdata#portal ObjectVpnSslWebPortalBookmarkgroupBookmarksFormdata#portal}
  */
  readonly portal: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal_bookmarkgroup_bookmarks_formdata#scopetype ObjectVpnSslWebPortalBookmarkgroupBookmarksFormdata#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal_bookmarkgroup_bookmarks_formdata#value ObjectVpnSslWebPortalBookmarkgroupBookmarksFormdata#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal_bookmarkgroup_bookmarks_formdata fortimanager_object_vpn_ssl_web_portal_bookmarkgroup_bookmarks_formdata}
*/
export class ObjectVpnSslWebPortalBookmarkgroupBookmarksFormdata extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_vpn_ssl_web_portal_bookmarkgroup_bookmarks_formdata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectVpnSslWebPortalBookmarkgroupBookmarksFormdata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectVpnSslWebPortalBookmarkgroupBookmarksFormdata to import
  * @param importFromId The id of the existing ObjectVpnSslWebPortalBookmarkgroupBookmarksFormdata that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal_bookmarkgroup_bookmarks_formdata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectVpnSslWebPortalBookmarkgroupBookmarksFormdata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_vpn_ssl_web_portal_bookmarkgroup_bookmarks_formdata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_vpn_ssl_web_portal_bookmarkgroup_bookmarks_formdata fortimanager_object_vpn_ssl_web_portal_bookmarkgroup_bookmarks_formdata} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectVpnSslWebPortalBookmarkgroupBookmarksFormdataConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectVpnSslWebPortalBookmarkgroupBookmarksFormdataConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_vpn_ssl_web_portal_bookmarkgroup_bookmarks_formdata',
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
    this._bookmarkGroup = config.bookmarkGroup;
    this._bookmarks = config.bookmarks;
    this._id = config.id;
    this._name = config.name;
    this._portal = config.portal;
    this._scopetype = config.scopetype;
    this._value = config.value;
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

  // bookmark_group - computed: false, optional: false, required: true
  private _bookmarkGroup?: string; 
  public get bookmarkGroup() {
    return this.getStringAttribute('bookmark_group');
  }
  public set bookmarkGroup(value: string) {
    this._bookmarkGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bookmarkGroupInput() {
    return this._bookmarkGroup;
  }

  // bookmarks - computed: false, optional: false, required: true
  private _bookmarks?: string; 
  public get bookmarks() {
    return this.getStringAttribute('bookmarks');
  }
  public set bookmarks(value: string) {
    this._bookmarks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bookmarksInput() {
    return this._bookmarks;
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

  // portal - computed: false, optional: false, required: true
  private _portal?: string; 
  public get portal() {
    return this.getStringAttribute('portal');
  }
  public set portal(value: string) {
    this._portal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalInput() {
    return this._portal;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      bookmark_group: cdktf.stringToTerraform(this._bookmarkGroup),
      bookmarks: cdktf.stringToTerraform(this._bookmarks),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      portal: cdktf.stringToTerraform(this._portal),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      value: cdktf.stringToTerraform(this._value),
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
      bookmark_group: {
        value: cdktf.stringToHclTerraform(this._bookmarkGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bookmarks: {
        value: cdktf.stringToHclTerraform(this._bookmarks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      portal: {
        value: cdktf.stringToHclTerraform(this._portal),
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
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
