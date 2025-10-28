// https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cen_transit_router_route_table_associations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCenTransitRouterRouteTableAssociationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cen_transit_router_route_table_associations#id DataAlicloudCenTransitRouterRouteTableAssociations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cen_transit_router_route_table_associations#ids DataAlicloudCenTransitRouterRouteTableAssociations#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cen_transit_router_route_table_associations#output_file DataAlicloudCenTransitRouterRouteTableAssociations#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cen_transit_router_route_table_associations#status DataAlicloudCenTransitRouterRouteTableAssociations#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cen_transit_router_route_table_associations#transit_router_attachment_id DataAlicloudCenTransitRouterRouteTableAssociations#transit_router_attachment_id}
  */
  readonly transitRouterAttachmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cen_transit_router_route_table_associations#transit_router_attachment_resource_id DataAlicloudCenTransitRouterRouteTableAssociations#transit_router_attachment_resource_id}
  */
  readonly transitRouterAttachmentResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cen_transit_router_route_table_associations#transit_router_attachment_resource_type DataAlicloudCenTransitRouterRouteTableAssociations#transit_router_attachment_resource_type}
  */
  readonly transitRouterAttachmentResourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cen_transit_router_route_table_associations#transit_router_route_table_id DataAlicloudCenTransitRouterRouteTableAssociations#transit_router_route_table_id}
  */
  readonly transitRouterRouteTableId?: string;
}
export interface DataAlicloudCenTransitRouterRouteTableAssociationsAssociations {
}

export function dataAlicloudCenTransitRouterRouteTableAssociationsAssociationsToTerraform(struct?: DataAlicloudCenTransitRouterRouteTableAssociationsAssociations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCenTransitRouterRouteTableAssociationsAssociationsToHclTerraform(struct?: DataAlicloudCenTransitRouterRouteTableAssociationsAssociations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCenTransitRouterRouteTableAssociationsAssociationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudCenTransitRouterRouteTableAssociationsAssociations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCenTransitRouterRouteTableAssociationsAssociations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transit_router_attachment_id - computed: true, optional: false, required: false
  public get transitRouterAttachmentId() {
    return this.getStringAttribute('transit_router_attachment_id');
  }

  // transit_router_route_table_id - computed: true, optional: false, required: false
  public get transitRouterRouteTableId() {
    return this.getStringAttribute('transit_router_route_table_id');
  }
}

export class DataAlicloudCenTransitRouterRouteTableAssociationsAssociationsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudCenTransitRouterRouteTableAssociationsAssociationsOutputReference {
    return new DataAlicloudCenTransitRouterRouteTableAssociationsAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cen_transit_router_route_table_associations alicloud_cen_transit_router_route_table_associations}
*/
export class DataAlicloudCenTransitRouterRouteTableAssociations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_transit_router_route_table_associations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCenTransitRouterRouteTableAssociations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCenTransitRouterRouteTableAssociations to import
  * @param importFromId The id of the existing DataAlicloudCenTransitRouterRouteTableAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cen_transit_router_route_table_associations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCenTransitRouterRouteTableAssociations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_transit_router_route_table_associations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/data-sources/cen_transit_router_route_table_associations alicloud_cen_transit_router_route_table_associations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCenTransitRouterRouteTableAssociationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCenTransitRouterRouteTableAssociationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_transit_router_route_table_associations',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.261.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ids = config.ids;
    this._outputFile = config.outputFile;
    this._status = config.status;
    this._transitRouterAttachmentId = config.transitRouterAttachmentId;
    this._transitRouterAttachmentResourceId = config.transitRouterAttachmentResourceId;
    this._transitRouterAttachmentResourceType = config.transitRouterAttachmentResourceType;
    this._transitRouterRouteTableId = config.transitRouterRouteTableId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associations - computed: true, optional: false, required: false
  private _associations = new DataAlicloudCenTransitRouterRouteTableAssociationsAssociationsList(this, "associations", false);
  public get associations() {
    return this._associations;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
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

  // transit_router_attachment_id - computed: false, optional: true, required: false
  private _transitRouterAttachmentId?: string; 
  public get transitRouterAttachmentId() {
    return this.getStringAttribute('transit_router_attachment_id');
  }
  public set transitRouterAttachmentId(value: string) {
    this._transitRouterAttachmentId = value;
  }
  public resetTransitRouterAttachmentId() {
    this._transitRouterAttachmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterAttachmentIdInput() {
    return this._transitRouterAttachmentId;
  }

  // transit_router_attachment_resource_id - computed: false, optional: true, required: false
  private _transitRouterAttachmentResourceId?: string; 
  public get transitRouterAttachmentResourceId() {
    return this.getStringAttribute('transit_router_attachment_resource_id');
  }
  public set transitRouterAttachmentResourceId(value: string) {
    this._transitRouterAttachmentResourceId = value;
  }
  public resetTransitRouterAttachmentResourceId() {
    this._transitRouterAttachmentResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterAttachmentResourceIdInput() {
    return this._transitRouterAttachmentResourceId;
  }

  // transit_router_attachment_resource_type - computed: false, optional: true, required: false
  private _transitRouterAttachmentResourceType?: string; 
  public get transitRouterAttachmentResourceType() {
    return this.getStringAttribute('transit_router_attachment_resource_type');
  }
  public set transitRouterAttachmentResourceType(value: string) {
    this._transitRouterAttachmentResourceType = value;
  }
  public resetTransitRouterAttachmentResourceType() {
    this._transitRouterAttachmentResourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterAttachmentResourceTypeInput() {
    return this._transitRouterAttachmentResourceType;
  }

  // transit_router_route_table_id - computed: false, optional: true, required: false
  private _transitRouterRouteTableId?: string; 
  public get transitRouterRouteTableId() {
    return this.getStringAttribute('transit_router_route_table_id');
  }
  public set transitRouterRouteTableId(value: string) {
    this._transitRouterRouteTableId = value;
  }
  public resetTransitRouterRouteTableId() {
    this._transitRouterRouteTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterRouteTableIdInput() {
    return this._transitRouterRouteTableId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
      transit_router_attachment_id: cdktf.stringToTerraform(this._transitRouterAttachmentId),
      transit_router_attachment_resource_id: cdktf.stringToTerraform(this._transitRouterAttachmentResourceId),
      transit_router_attachment_resource_type: cdktf.stringToTerraform(this._transitRouterAttachmentResourceType),
      transit_router_route_table_id: cdktf.stringToTerraform(this._transitRouterRouteTableId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_attachment_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_attachment_resource_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterAttachmentResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_attachment_resource_type: {
        value: cdktf.stringToHclTerraform(this._transitRouterAttachmentResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_route_table_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterRouteTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
